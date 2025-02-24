function onFormSubmit(e) {
  var responses = e.response.getItemResponses();
  var email = responses[0].getResponse();  // 1つ目の質問（メールアドレス）
  var password = responses[1].getResponse(); // 2つ目の質問（パスワード）

  var requiredDomain = "gmail.com"; // メールアドレスに含まれるべき文字列
  
  var sheet = SpreadsheetApp.openById("you_sheet_ID").getSheetByName("Passwords");
  var data = sheet.getDataRange().getValues();  // すべての行を取得

  var hashedInputPassword = hashPassword(password); // 入力されたパスワードをハッシュ化

  for (var i = 0; i < data.length; i++) {
      var storedHashedPassword = data[i][0];  // 1列目（A列）に保存されているハッシュ値
      if (email.includes(requiredDomain) && hashedInputPassword === storedHashedPassword) {
        found = true;
        Logger.log("一致: " + email);

        // ハッシュ値を削除
        sheet.getRange(i + 1, 1).setValue("");  // 一致した行のハッシュ値を削除
        Logger.log("ハッシュ値を削除しました。");

        giveViewerAccess(email);   //アクセス権付与

        break;  // 一致した時点でループを終了
      }
  }


}

function hashPassword(password) {
  var rawHash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, password, Utilities.Charset.UTF_8);
  return rawHash.map(function(e) { return ('0' + (e & 0xFF).toString(16)).slice(-2); }).join('');
}

function giveViewerAccess(email) {
  var fileId = "YOU_DRIVE_FILE_ID"; // アクセス権を付与するGoogleドライブのファイルID
  var file = DriveApp.getFileById(fileId);

  file.addViewer(email);
  Logger.log("閲覧権限を付与しました: " + email);
}
