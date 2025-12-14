import React from 'react';

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  links = [],
  googlePlay,
  appStore
}) {
  return (
    <div className="container">
      <div className="row">
        
        <div className="col-6 p-5">
          <img src={imageUrl} alt={productName} />
        </div>

        <div className="col-5 p-5 mt-5 offset-1">
          <h3>{productName}</h3>
          <p>{productDescription}</p>

          {/* Dynamic Links */}
          <div>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                style={{
                  textDecoration: "none",
                  marginRight: "50px"
                }}
              >
                {link.text}{" "}
                <i className={`fa ${link.icon}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>

          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;
