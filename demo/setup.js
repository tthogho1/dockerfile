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


docker�R���e�i��mongodb(v4.4.6)�ŁA�N������DB�쐬�ƈ�ʃ��[�U�̒ǉ�
�����悤�Ƃ��Ă��܂��B

�N������setup.js���ȉ��̂悤�ɍ쐬���A/docker-entrypoint-initdb.d/setup.js
�ɔz�u���Ă��܂��B

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


�N�����Ɉȉ��̃G���[���������ă��[�U�ǉ��ł��܂���B

@/docker-entrypoint-initdb.d/setup.js:1:4
failed to load: /docker-entrypoint-initdb.d/setup.js
exiting with code -3

�܂��Ause webcom���͂����ƁA���[�U�̒ǉ��ɂ͐������܂����A
webcom�f�[�^�x�[�X�͍쐬����܂���B



 windows 10��Docker Desktop
