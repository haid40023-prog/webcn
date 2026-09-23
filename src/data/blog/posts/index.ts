import type { BlogPost } from "../types";
import { cacViTraSauMoiNhat } from "./cac-vi-tra-sau-moi-nhat";
import { cachThanhToanViTraSau } from "./cach-thanh-toan-vi-tra-sau";
import { cakeTraSauLaGi } from "./cake-tra-sau-la-gi";
import { feCreditPaylaterLaGi } from "./fe-credit-paylater-la-gi";
import { hanMucKredivo } from "./han-muc-kredivo";
import { hanMucViTraSauLaGi } from "./han-muc-vi-tra-sau-la-gi";
import { hanMucViTraSauMomo } from "./han-muc-vi-tra-sau-momo";
import { hanMucTheTinDungLaGi } from "./han-muc-the-tin-dung-la-gi";
import { hanMucZalopayTraSau } from "./han-muc-zalopay-tra-sau";
import { homePaylaterLaGi } from "./home-paylater-la-gi";
import { huongDanTinhPhiThamKhao } from "./huong-dan-tinh-phi-tham-khao";
import { khongThanhToanTheTinDungDungHanCoSaoKhong } from "./khong-thanh-toan-the-tin-dung-dung-han-co-sao-khong";
import { khongThanhToanViTraSauThiSao } from "./khong-thanh-toan-vi-tra-sau-thi-sao";
import { laiSuatTheTinDung } from "./lai-suat-the-tin-dung";
import { kredivoLaGi } from "./kredivo-la-gi";
import { ngaySaoKeTheTinDungLaGi } from "./ngay-sao-ke-the-tin-dung-la-gi";
import { ngayThanhToanTheTinDungLaGi } from "./ngay-thanh-toan-the-tin-dung-la-gi";
import { phiThuongNienTheTinDung } from "./phi-thuong-nien-the-tin-dung";
import { momoViTraSauLaGi } from "./momo-vi-tra-sau-la-gi";
import { muadeeLaGi } from "./muadee-la-gi";
import { rutTienMatTuTheTinDungLaGi } from "./rut-tien-mat-tu-the-tin-dung-la-gi";
import { rutHanMucKredivo } from "./rut-han-muc-kredivo";
import { rutShopeepayLater } from "./rut-shopeepay-later";
import { rutViTraSauCanLuuY } from "./rut-vi-tra-sau-can-luu-y";
import { rutViTraSauHaNoiUyTin } from "./rut-vi-tra-sau-ha-noi-uy-tin";
import { rutViTraSauMomoHaNoi } from "./rut-vi-tra-sau-momo-ha-noi";
import { rutViTraSauTrucTiepODau } from "./rut-vi-tra-sau-truc-tiep-o-dau";
import { rutViTraSauZalopay } from "./rut-vi-tra-sau-zalopay";
import { thanhToanToiThieuTheTinDungLaGi } from "./thanh-toan-toi-thieu-the-tin-dung-la-gi";
import { theTinDungHoatDongNhuTheNao } from "./the-tin-dung-hoat-dong-nhu-the-nao";
import { theTinDungLaGi } from "./the-tin-dung-la-gi";
import { shopeepayLaterLaGi } from "./shopeepay-later-la-gi";
import { tiktokPayLaterLaGi } from "./tiktok-pay-later-la-gi";
import { tnexTraSauLaGi } from "./tnex-tra-sau-la-gi";
import { viSaoViTraSauKhongSuDungDuoc } from "./vi-sao-vi-tra-sau-khong-su-dung-duoc";
import { viTraSauBiKhoaPhaiLamSao } from "./vi-tra-sau-bi-khoa-phai-lam-sao";
import { viTraSauCoAnhHuongCicKhong } from "./vi-tra-sau-co-anh-huong-cic-khong";
import { viTraSauCoChuyenKhoanDuocKhong } from "./vi-tra-sau-co-chuyen-khoan-duoc-khong";
import { viTraSauCoMatPhiKhong } from "./vi-tra-sau-co-mat-phi-khong";
import { viTraSauCoRutTienDuocKhong } from "./vi-tra-sau-co-rut-tien-duoc-khong";
import { viTraSauCoTheSuDungODau } from "./vi-tra-sau-co-the-su-dung-o-dau";
import { viTraSauHoatDongNhuTheNao } from "./vi-tra-sau-hoat-dong-nhu-the-nao";
import { viTraSauLaGi } from "./vi-tra-sau-la-gi";
import { viTraSauMomoCoRutDuocKhong } from "./vi-tra-sau-momo-co-rut-duoc-khong";
import { viettelMoneyTraSauLaGi } from "./viettel-money-tra-sau-la-gi";
import { vnpayTraSauLaGi } from "./vnpay-tra-sau-la-gi";
import { zalopayTraSauLaGi } from "./zalopay-tra-sau-la-gi";

/**
 * Thêm bài viết mới:
 * 1. Tạo file `src/data/blog/posts/<slug>.ts` export một `BlogPost`.
 * 2. Import file đó vào đây và thêm vào mảng `blogPosts`.
 *
 * `slug` chỉ gồm chữ thường, số và gạch ngang. Trùng slug sẽ báo lỗi khi build.
 */
export const blogPosts: BlogPost[] = [
  huongDanTinhPhiThamKhao,
  rutViTraSauCanLuuY,
  viTraSauMomoCoRutDuocKhong,
  rutViTraSauMomoHaNoi,
  rutViTraSauHaNoiUyTin,
  rutViTraSauTrucTiepODau,
  cacViTraSauMoiNhat,
  viTraSauLaGi,
  viTraSauHoatDongNhuTheNao,
  viTraSauCoRutTienDuocKhong,
  viTraSauCoChuyenKhoanDuocKhong,
  viTraSauCoMatPhiKhong,
  viTraSauCoAnhHuongCicKhong,
  khongThanhToanViTraSauThiSao,
  cachThanhToanViTraSau,
  hanMucViTraSauLaGi,
  viSaoViTraSauKhongSuDungDuoc,
  viTraSauBiKhoaPhaiLamSao,
  viTraSauCoTheSuDungODau,
  momoViTraSauLaGi,
  hanMucViTraSauMomo,
  kredivoLaGi,
  hanMucKredivo,
  rutHanMucKredivo,
  zalopayTraSauLaGi,
  hanMucZalopayTraSau,
  rutViTraSauZalopay,
  shopeepayLaterLaGi,
  rutShopeepayLater,
  viettelMoneyTraSauLaGi,
  tnexTraSauLaGi,
  muadeeLaGi,
  cakeTraSauLaGi,
  vnpayTraSauLaGi,
  tiktokPayLaterLaGi,
  homePaylaterLaGi,
  feCreditPaylaterLaGi,
  theTinDungLaGi,
  theTinDungHoatDongNhuTheNao,
  hanMucTheTinDungLaGi,
  ngaySaoKeTheTinDungLaGi,
  ngayThanhToanTheTinDungLaGi,
  thanhToanToiThieuTheTinDungLaGi,
  khongThanhToanTheTinDungDungHanCoSaoKhong,
  phiThuongNienTheTinDung,
  laiSuatTheTinDung,
  rutTienMatTuTheTinDungLaGi,
];

const seen = new Set<string>();
for (const post of blogPosts) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) {
    throw new Error(`Slug bài viết không hợp lệ: "${post.slug}"`);
  }
  if (seen.has(post.slug)) {
    throw new Error(`Trùng slug bài viết: "${post.slug}"`);
  }
  seen.add(post.slug);
}
