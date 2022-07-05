import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Spin, Row, Col, Table, Tag, Space } from "antd";

// actions
import { getMovieDetail } from "store/actions/movie.action";

// utils
import { formatDate } from "utils";

// components
import { Header, ModalTrailer, Button } from "components";
import TheaterCard from './TheaterCard';

// styles
import {
  MovieDetailContainer,
  MovieDetailContent,
  TextBackToHomePage,
  TitleGroup,
  TitleDivide,
  MovieDescribe,
  MovieTextDetail,
  MovieDetailGroup,
  MovieTextTypeFilm,
  MovieDetailImg,
  SpinCustom,
} from "./style";
function MovieDetail() {
  const { tenPhim, hinhAnh, moTa, ngayKhoiChieu, trailer, lichChieu } =
    useSelector((state) => state.movie.movieDetail);
  const loading = useSelector((state) => state.common.loading);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const [isShowListSchedules, setIsShowListSchedules] = useState(false);

  const columns = [
    {
      title: "Số thứ tự",
      width: 60,
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => <Space>{index + 1}</Space>,
    },
    {
      title: "Tên cụp rạp",
      width: 250,
      dataIndex: "thongTinRap",
      key: "thongTinRap",
      render: (record) => <Space>{record?.tenCumRap}</Space>,
    },
    {
      title: "Tên rạp",
      width: 250,
      dataIndex: "thongTinRap",
      key: "thongTinRap",
      render: (record) => <Space>{record?.tenRap}</Space>,
    },
    {
      title: "Giá vé",
      width: 150,
      key: "giaVe",
      dataIndex: "giaVe",
    },
    {
      title: "Thời lượng",
      width: 100,
      key: "thoiLuong",
      dataIndex: "thoiLuong",
    },
    {
      title: "Ngày chiếu",
      width: 150,
      key: "ngayChieuGioChieu",
      dataIndex: "ngayChieuGioChieu",
      render: (record) => formatDate(record, "DD/MM/YYYY -- hh:mm"),
    },
  ];

  const data = lichChieu;

  // const filterData = data.filter(item => item.thongTinRap.maCumRap === "cgv-crescent-mall");
  let newData = [];
  let theaterItem = {};
  const listTheaters = data?.map(item => theaterItem = {maCumRap: item?.thongTinRap?.maCumRap, tenCumRap: item?.thongTinRap?.tenCumRap});
 
  newData = listTheaters?.filter(item => newData?.includes(item?.maCumRap) ? '' : newData.push(item?.maCumRap))
  console.log("newData", newData);
  console.log("newData 1", newData ? newData[0] : "");

  const handleBackToHomePage = () => {
    history.push("/");
  };

  useEffect(() => {
    dispatch(getMovieDetail(params.maPhim));
  }, [params.maPhim]);

  return (
    <>
      <Header />
      <MovieDetailContainer>
        <MovieDetailContent>
          {loading ? (
           <SpinCustom>
              <Spin />
           </SpinCustom>
          ) : (
            <>
              <TitleGroup>
                <div
                  aria-hidden={true}
                  onClick={handleBackToHomePage}
                  className="text-back-to-homePage"
                >
                  Trang chủ
                </div>
                <TitleDivide />
                <TextBackToHomePage>{tenPhim}</TextBackToHomePage>
              </TitleGroup>
              <Row gutter={[0, 0]}>
                <Col md={12} xs={24} className="movie-detail__image">
                  <MovieDetailImg src={hinhAnh} alt="img-detail-movie" />
                </Col>
                <Col md={12} xs={24}>
                  <TextBackToHomePage>{tenPhim}</TextBackToHomePage>
                  <MovieDescribe>{moTa}</MovieDescribe>
                  <MovieDetailGroup>
                    <MovieTextDetail>Phân loại</MovieTextDetail>
                    <MovieTextTypeFilm>
                      C18 - Phim dành cho khán giả từ 18 tuổi trở lên
                    </MovieTextTypeFilm>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Đạo diễn</MovieTextDetail>
                    <MovieTextDetail>- -</MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Diễn viên</MovieTextDetail>
                    <MovieTextDetail>- -</MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Thể loại</MovieTextDetail>
                    <MovieTextDetail>- -</MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Thời lượng</MovieTextDetail>
                    <MovieTextDetail>90 phút</MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Khởi chiếu</MovieTextDetail>
                    <MovieTextDetail>
                      {formatDate(ngayKhoiChieu, "DD/MM/YYYY")}
                    </MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup>
                    <MovieTextDetail>Ngôn ngữ</MovieTextDetail>
                    <MovieTextDetail>Phụ đề tiếng Việt</MovieTextDetail>
                  </MovieDetailGroup>
                  <MovieDetailGroup style={{ marginTop: "32px" }}>
                    <ModalTrailer isButton videoId={trailer} />
                    <Button
                      onClick={() => setIsShowListSchedules(true)}
                      style={{ marginLeft: "16px" }}
                      type="primaryRed"
                    >
                      Mua vé ngay
                    </Button>
                  </MovieDetailGroup>
                </Col>
              </Row>
              {isShowListSchedules && (
              //  <TheaterCard />
             newData.map((item, index) => {
              return  <TheaterCard key={index} theaterName={item.tenCumRap} />
               })
              
              )}
            </>
          )}
        </MovieDetailContent>
      </MovieDetailContainer>
    </>
  );
}

export default MovieDetail;
