SET NAMES UTF8;
DROP DATABASE IF EXISTS meizu;
CREATE DATABASE meizu CHARSET=UTF8;
USE meizu;
CREATE TABLE t_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(20) NOT NULL DEFAULT '',
    upwd VARCHAR(20) NOT NULL DEFAULT '',
    rtime BIGINT NOT NULL DEFAULT 0
);
INSERT INTO t_user VALUES(NULL,'13247296728','123456',1496623238808);
CREATE TABLE t_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pname VARCHAR(50) NOT NULL DEFAULT '',
	price DECIMAL(10,2) NOT NULL DEFAULT 0,
	pic VARCHAR(100) NOT NULL DEFAULT ''
);
CREATE TABLE t_cart(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    pid INT NOT NULL DEFAULT 0,
    count INT NOT NULL DEFAULT 0,
    uid INT NOT NULL DEFAULT 0
);
INSERT INTO t_product VALUES
(NULL,'魅族E 64G 四核处理器','2000.00','img1/phone/Cgbj0FjnaGeAa6rvAAscQInnNPY182_180x180.png'),
(NULL,'魅蓝 32G 四核处理器','1500.00','img1/phone/Cgbj0Fjnce2AeScKAAzQ2opb7qI075_180x180.png'),
(NULL,'魅族ox 64G 四核处理器','899.00','img1/phone/Cgbj0Fjq6OKAFxjKAAqULbIBw-M120_180x180.png'),
(NULL,'魅族A 64G 四核处理器','1400.00','img1/phone/Cgbj0Fjq8suAY-d8AAndI9Fz2pU920_180x180.png'),
(NULL,'魅族B 64G 四核处理器','2850.00','img1/phone/Cgbj0VjnaD2AWbBAAAj4ScedJ9k000_180x180.png'),
(NULL,'魅族C 64G 四核处理器','1000.00','img1/phone/Cix_s1iz2eyAHHYvAAI2Uq56IXM427_180x180.jpg'),
(NULL,'耳机247A 64G 四核处理器','3000.00','img1/phone/CnQOjVhhz1mAcFUgAAuqcqE5YHc366_180x180.png'),
(NULL,'入耳式耳机A 64G 四核处理器','4000.00','img1/phone/Cgbj0Fjq6OKAFxjKAAqULbIBw-M120_180x180.png'),
(NULL,'头戴式耳机A 64G 四核处理器','5500.00','img1/phone/Cgbj0Fjq8suAY-d8AAndI9Fz2pU920_180x180.png'),
(NULL,'拍照手机A 64G 四核处理器','3500.00','img1/phone/Cgbj0Fjq6BqAb2epAAbboUvsAC4600_180x180.png'),
(NULL,'手机壳A 64G 四核处理器','4500.00','img1/phone/Cgbj0Fjq6byAbS5KAAWliiYuNXs604_180x180.png'),
(NULL,'保护套A 64G 四核处理器','800.00','img1/phone/Cgbj0Fjq6E6AayvLAAJHK5xzrJU128_180x180.png'),
(NULL,'数据线A 64G 四核处理器','1990.00','img1/phone/Cgbj0Fjq6H-AWbpIAATCpS1_AKY581_180x180.png'),
(NULL,'耳机247A 64G 四核处理器','666.00','img1/phone/Cgbj0FjkVGqAWQJWAAIfW-xt8PI333_180x180.png'),
(NULL,'入耳式耳机A 64G 四核处理器','500.00','img1/phone/Cgbj0FjlqXOARJxhAALh-BbtGLQ997_180x180.png'),
(NULL,'拍照手机A 64G 四核处理器','300.00','img1/phone/Cgbj0FjlqZWAW4uoAAIXT7S3bdY537_180x180.png'),
(NULL,'手机壳A 64G 四核处理器','2600.00','img1/phone/CnQOjVh8hkqARwo-AAJdyfxjnVw196_180x180.jpg'),
(NULL,'保护套A 64G 四核处理器','288.00','img1/phone/CnQOjVh9tR2AE-paAATN6O8PD3w810_180x180.png'),
(NULL,'数据线A 64G 四核处理器','7000.00','img1/phone/Cgbj0FjkVGqAWQJWAAIfW-xt8PI333_180x180.png'),
(NULL,'魅族D 64G 四核处理器','998.00','img1/phone/Cgbj0Fjq6H-AWbpIAATCpS1_AKY581_180x180.png');