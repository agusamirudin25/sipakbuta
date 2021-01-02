/*
 Navicat Premium Data Transfer

 Source Server         : kominfo
 Source Server Type    : MySQL
 Source Server Version : 100406
 Source Host           : localhost:3306
 Source Schema         : db_sipakbuta

 Target Server Type    : MySQL
 Target Server Version : 100406
 File Encoding         : 65001

 Date: 02/01/2021 20:34:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for m_agenda
-- ----------------------------
DROP TABLE IF EXISTS `m_agenda`;
CREATE TABLE `m_agenda`  (
  `id_agenda` varchar(16) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nama_kegiatan` varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `hari` varchar(16) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `tanggal` date NULL DEFAULT NULL,
  `jam` time(0) NULL DEFAULT NULL,
  `lokasi` varchar(16) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `warna` varchar(24) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `status` int(1) NULL DEFAULT NULL,
  `tanggal_dibuat` datetime(0) NULL DEFAULT current_timestamp(0),
  `tanggal_diubah` datetime(0) NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `dibuat_oleh` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id_agenda`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of m_agenda
-- ----------------------------
INSERT INTO `m_agenda` VALUES ('A001', 'Rapat dengan Kecamatan', 'Jumat', '2020-12-04', '11:05:00', 'L002', '#1c97ca', 1, '2020-12-03 00:06:16', '2020-12-04 20:29:01', 1);
INSERT INTO `m_agenda` VALUES ('A002', 'Rapat Pengamanan PILKADA serentak 2020', 'Jumat', '2020-12-04', '16:08:00', 'L002', '#00af50', 1, '2020-12-03 19:26:18', '2020-12-04 20:41:57', 1);
INSERT INTO `m_agenda` VALUES ('A003', 'Rapat Gugus Tugas Covid19', 'Kamis', '2020-12-24', '04:01:00', 'L003', '#f1c344', 1, '2020-12-03 19:26:31', '2020-12-24 13:15:16', 1);
INSERT INTO `m_agenda` VALUES ('A004', 'Rapat Koordinasi dengan Kemenko Marves', 'Jumat', '2020-12-25', '16:00:00', 'L002', '#00af50', 1, '2020-12-18 17:16:07', '2021-01-02 12:55:23', 1);
INSERT INTO `m_agenda` VALUES ('A005', 'Rapat Koordinasi dengan Kemenko Marves', 'Kamis', '2020-11-24', '16:00:00', 'L002', '#00af50', 1, '2020-12-18 17:16:07', '2020-12-24 13:15:09', 1);

-- ----------------------------
-- Table structure for m_lokasi
-- ----------------------------
DROP TABLE IF EXISTS `m_lokasi`;
CREATE TABLE `m_lokasi`  (
  `id_lokasi` varchar(6) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nama_lokasi` varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `status` int(1) NULL DEFAULT NULL,
  `dibuat_oleh` int(11) NULL DEFAULT NULL,
  `tanggal_dibuat` datetime(0) NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id_lokasi`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of m_lokasi
-- ----------------------------
INSERT INTO `m_lokasi` VALUES ('L001', 'Ruang Rapat Command Center', 1, 1, '2020-11-29 22:49:23');
INSERT INTO `m_lokasi` VALUES ('L002', 'Ruang Utama Command Center', 1, 1, '2020-11-29 21:54:32');
INSERT INTO `m_lokasi` VALUES ('L003', 'Ruang Lantai 3', 1, 1, '2020-11-29 22:35:28');
INSERT INTO `m_lokasi` VALUES ('L004', 'Aula Husni Hamid', 1, 2, '2020-12-29 22:38:35');

-- ----------------------------
-- Table structure for m_main
-- ----------------------------
DROP TABLE IF EXISTS `m_main`;
CREATE TABLE `m_main`  (
  `id_konfigurasi` int(11) NOT NULL AUTO_INCREMENT,
  `nama_perusahaan` varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `nama_aplikasi` varchar(32) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `deskripsi_aplikasi` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `logo` varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `alamat` varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `status` int(1) NOT NULL,
  `tanggal_dibuat` datetime(0) NULL DEFAULT current_timestamp(0),
  PRIMARY KEY (`id_konfigurasi`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of m_main
-- ----------------------------
INSERT INTO `m_main` VALUES (1, 'Dinas Komunikasi dan Informatika', 'SIPAKBUTA', 'Aplikasi Pencatatan Agenda Kegiatan dan Buku Tamu', '99123d1304f126a2a604d787d3ad0bd6.png', 'Jl. Ahmad Yani No 10 Gedung Islamic Center', 1, '2020-09-03 12:00:41');

-- ----------------------------
-- Table structure for m_pengguna
-- ----------------------------
DROP TABLE IF EXISTS `m_pengguna`;
CREATE TABLE `m_pengguna`  (
  `id_pengguna` int(11) NOT NULL AUTO_INCREMENT,
  `nama_pengguna` varchar(32) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `nama_lengkap` varchar(56) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `jenis_kelamin` varchar(1) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `email` varchar(56) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `no_hp` varchar(14) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `jabatan` varchar(32) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `paraf` varchar(32) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `status` int(1) NULL DEFAULT NULL,
  `katasandi` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `tanggal_dibuat` datetime(0) NULL DEFAULT current_timestamp(0),
  `tanggal_diubah` datetime(0) NULL DEFAULT current_timestamp(0),
  `last_login` datetime(0) NULL DEFAULT current_timestamp(0),
  PRIMARY KEY (`id_pengguna`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of m_pengguna
-- ----------------------------
INSERT INTO `m_pengguna` VALUES (1, 'agus_amirudin', 'Agus Amirudin', 'L', 'aamirudinkom@gmail.com', '08997756356', 'SIE', 'default.png', 1, '1abd19bdc0ff9a88866723ffa6687d9b', '2020-11-25 20:29:09', '2020-11-25 20:29:09', '2020-11-28 14:57:10');
INSERT INTO `m_pengguna` VALUES (3, 'ratna_ayu', 'Ratna Ayu Dwi P', 'P', 'rtnayu@gmail.com', '089983834744', 'OP', 'Ratna Ayu Dwi P.png', 1, '29c65f781a1068a41f735e1b092546de', '2020-11-28 17:15:42', '2020-11-28 17:15:42', '2020-11-28 17:15:42');

-- ----------------------------
-- Table structure for m_pengunjung
-- ----------------------------
DROP TABLE IF EXISTS `m_pengunjung`;
CREATE TABLE `m_pengunjung`  (
  `id_pengunjung` varchar(16) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nama` varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `jabatan` varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `instansi` varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `no_hp` varchar(13) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `tanda_tangan` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `status` int(1) NULL DEFAULT NULL,
  `tanggal_dibuat` datetime(0) NULL DEFAULT current_timestamp(0),
  `tanggal_diubah` datetime(0) NULL DEFAULT current_timestamp(0),
  PRIMARY KEY (`id_pengunjung`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of m_pengunjung
-- ----------------------------
INSERT INTO `m_pengunjung` VALUES ('PG001', 'Samsuri', 'Asisten Daerah', 'Setda Karawang', '081123383433', 'Samsuri.png', 1, '2020-11-29 20:19:20', '2020-11-29 20:19:20');
INSERT INTO `m_pengunjung` VALUES ('PG002', 'Ahmad Hidayat', 'Asisten Daerah', 'SETDA KARAWANG', '0832928392323', 'Ahmad Hidayat.png', 1, '2020-11-29 21:31:10', '2020-11-29 21:31:10');
INSERT INTO `m_pengunjung` VALUES ('PG003', 'Agus Amirudin', 'Operator', 'Dinas Kominfo', '098989786886', 'Agus Amirudin.png', 1, '2020-12-24 13:32:26', '2020-12-24 13:32:26');

-- ----------------------------
-- Table structure for tr_bukutamu
-- ----------------------------
DROP TABLE IF EXISTS `tr_bukutamu`;
CREATE TABLE `tr_bukutamu`  (
  `id_bukutamu` varchar(16) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `id_agenda` varchar(16) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `id_pengunjung` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `pembahasan` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `dokumentasi` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `tanggal_dibuat` datetime(0) NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `dibuat_oleh` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id_bukutamu`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tr_bukutamu
-- ----------------------------
INSERT INTO `tr_bukutamu` VALUES ('B005', 'A004', '[\"PG003\",\"PG001\"]', '<p>Pengembangan Dan Implementasi Aplikasi SIKDA Kota Tangerang. Dalam video conference ini, BKPSDM dan Diskominfo Karawang melakukan Zoom meeting bersama BKPSDM dan Diskominfo Tangerang membahas mengenai rencana peng-implementasi-an konsep Aplikasi SIKDA Tangerang dengan Aplikasi SIKDA Karawang.</p>', '[\"ed94868672f4f88a9fe8da2dbb9499b9.png\"]', '2020-12-28 01:21:16', 3);
INSERT INTO `tr_bukutamu` VALUES ('B006', 'A003', '[\"PG003\",\"PG002\"]', '<p>Pengembangan Dan Implementasi Aplikasi SIKDA Kota Tangerang. Dalam video conference ini, BKPSDM dan Diskominfo Karawang melakukan Zoom meeting bersama BKPSDM dan Diskominfo Tangerang membahas mengenai rencana peng-implementasi-an konsep Aplikasi SIKDA Tangerang dengan Aplikasi SIKDA Karawang.</p>', '[\"12a1a9bb309d476c41ccccc9bc1fab2b.png\",\"5a4be7c6ed4099014c72ed307de27375.png\",\"e53d01c717522e15b56f17b9a130f802.png\"]', '2020-12-28 01:21:16', 3);
INSERT INTO `tr_bukutamu` VALUES ('B007', 'A001', '[\"PG002\"]', '<p>PHP adalah bahasa pemrograman yang dapat membuat website</p>', '[\"5b3249ea7b3029b769d61468bbbd064a.PNG\"]', '2020-12-28 01:21:16', 3);

-- ----------------------------
-- Table structure for tr_laporan
-- ----------------------------
DROP TABLE IF EXISTS `tr_laporan`;
CREATE TABLE `tr_laporan`  (
  `id_laporan` varchar(6) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nama` varchar(64) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `tanggal_dibuat` date NULL DEFAULT current_timestamp,
  `dibuat_oleh` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id_laporan`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tr_laporan
-- ----------------------------
INSERT INTO `tr_laporan` VALUES ('LAP001', 'Laporan Bulan Desember 2020', '2020-12-21', 1);
INSERT INTO `tr_laporan` VALUES ('LAP002', 'Laporan-Agenda-Desember-2020', '2021-01-02', 3);
INSERT INTO `tr_laporan` VALUES ('LAP003', 'Laporan-Agenda-Desember-2020', '2021-01-02', 3);
INSERT INTO `tr_laporan` VALUES ('LAP004', 'Laporan-Agenda-Desember-2020', '2021-01-02', 3);

SET FOREIGN_KEY_CHECKS = 1;
