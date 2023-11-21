import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "../shared/style/BannerStyle";

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoPlaySpeed: 300,
  };

  const Images = [
    { id: 1, url: "/fifa.jpg" },
    { id: 2, url: "/football.jpg" },
    { id: 3, url: "/fc24.jpg" },
    { id: 4, url: "/maple.jpg" },
    { id: 5, url: "/lol.jpg" },
    { id: 5, url: "/yachae.jpg" },
    { id: 5, url: "/valorant.jpg" },
    { id: 5, url: "/overwatch.jpg" },
    { id: 5, url: "/battleground.jpg" },
    { id: 5, url: "/qplay.jpg" },
    { id: 5, url: "/kartrider.jpg" },
    { id: 5, url: "/crazyarcade.jpg" },
  ];

  return (
    <S.Wrapper>
      <S.BannerWrapper>
        <Slider {...settings}>
          {Images.map((image) => (
            <div key={image.id}>
              <div>
                <S.SliderItem src={image.url} alt="엑박" />
              </div>
            </div>
          ))}
        </Slider>
      </S.BannerWrapper>
    </S.Wrapper>
  );
}
