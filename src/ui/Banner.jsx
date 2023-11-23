import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "../shared/style/BannerStyle";

export default function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoPlaySpeed: 300,
  };

  const Images = [
    { id: 1, url: "/fifa.jpg" },
    { id: 2, url: "/football.jpg" },
    { id: 3, url: "/fc24.jpg" },
    { id: 4, url: "/golf.jpeg" },
    { id: 5, url: "/nba.jpg" },
    { id: 6, url: "/lineage.jpg" },
    { id: 7, url: "/lost.png" },
    { id: 8, url: "/maple.png" },
    { id: 9, url: "/lol.jpg" },
    { id: 10, url: "/wind.png" },
    { id: 11, url: "/sudden.jpg" },
    { id: 12, url: "/hitman.webp" },
    { id: 13, url: "/valorant.jpg" },
    { id: 14, url: "/overwatch.jpg" },
    { id: 15, url: "/battleground.jpg" },
    { id: 16, url: "/qplay.jpg" },
    { id: 17, url: "/kartrider.jpg" },
    { id: 18, url: "/crazyarcade.jpg" },
    { id: 19, url: "/catch.webp" },
    { id: 20, url: "/r2beat.jpg" },
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
