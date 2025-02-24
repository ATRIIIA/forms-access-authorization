# forms-access-authorization
google formsを用いてgoogle driveのアクセス権を付与するコード

# 使用方法
## 1 google formを作成、  
![Image](https://github.com/user-attachments/assets/eff10a51-70aa-46f9-a19a-8efed43f6b1d)  
ここで一度スプレッドシートを開き、  
```Passwords```の名前で新たにシートを作成する。  
その時にスプレッドシートのIDを記録しておくといいでしょう。
## 2 apps scriptを開く
```YOU_SHEET_ID```のところにスプレッドシートのID入れる必要がある。  
アクセス権を付与したいドライブのIDを探し、```YOU_DRIVE_ID```のところに入れる。  
```gmail.com```で検索しているところは変更する必要があるかもしれない。  

## パスワードの生成
ハッシュ値を用いて保存をしています。  
一度使用したパスワードは使用することができないようにしています。  
パスワードを覚えられない人は使わないほうがいいでしょう。  


