import React from 'react';

function RightSection({
  imageUrl,
  productName,
  productDescription,
  links = [],
}) {
  return (
    <div className="container">
      <div className="row g-5 align-items-center">

        <div className="col-5 p-5 mt-5">
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
        </div>

        <div className="col-6 p-5">
          <img src={imageUrl} alt={productName} />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
