function storeHashedPassword() {
  var password = "test1234";  // ここに設定したいパスワード
  var hashedPassword = hashPassword(password);

  var sheet = SpreadsheetApp.openById("YOU_SHEET_ID").getSheetByName("Passwords");
  if (!sheet) {
    Logger.log("エラー: シート 'Passwords' が見つかりません。");
    return;
  }

  var lastRow = sheet.getLastRow(); // 最後にデータがある行を取得
  var nextRow = lastRow + 1; // 次の空いている行を計算

  sheet.getRange(nextRow, 1).setValue(hashedPassword); // A列の次の行に保存
  Logger.log("ハッシュ化されたパスワードを保存しました（行 " + nextRow + "）: " + hashedPassword);
}
