use webcom
const user = {
  user: 'webcom',
  pwd: 'webcom',
  roles: [{
    role: 'readWrite',
    db: 'webcom'
  }]
};

db.createUser(user);



@/docker-entrypoint-initdb.d/setup.js:1:4
failed to load: /docker-entrypoint-initdb.d/setup.js
exiting with code -3


dockerコンテナのmongodb(v4.4.6)で、起動時にDB作成と一般ユーザの追加
をしようとしています。

起動時のsetup.jsを以下のように作成し、/docker-entrypoint-initdb.d/setup.js
に配置しています。

use webcom
const user = {
  user: 'webcom',
  pwd: 'webcom',
  roles: [{
    role: 'readWrite',
    db: 'webcom'
  }]
};

db.createUser(user);


起動時に以下のエラーが発生してユーザ追加できません。

@/docker-entrypoint-initdb.d/setup.js:1:4
failed to load: /docker-entrypoint-initdb.d/setup.js
exiting with code -3

また、use webcomをはずすと、ユーザの追加には成功しますが、
webcomデータベースは作成されません。



 windows 10のDocker Desktop
