import React from 'react';
import banerImg1 from "../img/baner-1.png"

const BannerSection = () => {
  return (
    <div className="container-fluid banner bg-secondary my-5">
        <div className="container py-5">
            <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                    <div className="py-4">
                        <p className="fw-normal display-3 text-dark mb-4">Limited Stock!</p>
                        <h1 className="display-3 text-white">MagSafe Battery Pack by Apple</h1>
                        <p className="mb-4 text-dark">Dapatkan segera MagSafe Battery Pack by Apple, pengecas nirkabel dengan desain minimalis dan kinerja handal. Barang terbatas, jadi buruan sebelum kehabisan!.</p>
                        <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">BUY</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="position-relative">
                        <img src={banerImg1} className="img-fluid w-100 rounded" alt="banner" />
                        <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style={{width: '140px', height: '140px', top: 0, left: 0}}>
                            <h1 style={{fontSize: '100px'}}>2</h1>
                            <div className="d-flex flex-column">
                                <span className="h2 mb-0">.199</span>
                                <span className="h4 text-muted mb-0">K</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BannerSection;