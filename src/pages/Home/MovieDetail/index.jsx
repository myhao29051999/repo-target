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
              <Row gutter={[0, 42]}>
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
                <Table
                  style={{ marginTop: "32px" }}
                  columns={columns}
                  dataSource={data}
                  scroll={{ x: 1300 }}
                />
              )}
            </>
          )}
        </MovieDetailContent>
      </MovieDetailContainer>
    </>
  );
}

export default MovieDetail;
