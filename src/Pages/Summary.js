import React from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  return (
    <>
      <div>
        <div
          className="container card bg-light"
          style={{ backgroundColor: "#aed9f6" }}
        >
          <div className="text-start mx-md-4 mt-2 ">
            <Link
              to="/"
              className="btn btn-secondary px-3 py-2 text-start"
            >
              Back
            </Link>
          </div>
          <div className="px-md-5 mt-4">
            <h1 className="mb-3 fs-1 text-start">Summary of this course</h1>
            <div className="row">
              <div className="col-12 col-md-11 pb-5  text-start">
                <p>
                  What Websites Can WordPress Make? Hobby or Lifestyle Blogs Due
                  to WordPress's origin in the blog space, its features for this
                  purpose are rich, including: The ability to differentiate
                  between posts and pages A robust WYSIWYG editor for easy post
                  creation
                  <br />
                  Posts, tags, and categories for creating a rich content
                  organization system Options for users to leave comments and
                  you to easily moderate them Once you have WordPress installed,
                  the main thing you'll want to do is choose a theme that
                  appeals to you and what you want to accomplish with your blog.
                  There are themes that accommodate news, magazine, and tiled
                  layouts (and more). Next, you'll want to add plugins for any
                  functionality you want that doesn't come with the theme, such
                  as social sharing buttons or click-to-tweet. Professional
                  Portfolios
                  <br />
                  <br />
                  You can also find a variety of themes for professional
                  portfolios, making WordPress a great choice for showcasing
                  your personal brand. The "Pages" functionality can be used for
                  your homepage, About page, contact page, etc. while the
                  "Posts" functionality can be used for the specific pieces you
                  want to highlight — whether they're in image, text, audio, or
                  video format. You can choose a theme with a built-in gallery,
                  or you can install plugins for portfolio carousels or sliders.
                  Business Websites
                  <br />
                  <br />A business website needs to get even more mileage out of
                  WordPress, in many cases having more pages and posts than the
                  average personal blog or site and needing additional
                  functionality. However, due to its powerful built-in CMS
                  capabilities and the open-source community continuing to
                  iterate solutions, WordPress is fantastic at meeting those
                  needs. You can choose a website theme that works best for what
                  you're looking to accomplish and then customize it according
                  to your brand. Page builders such as Elementor and Divi make
                  the layout process even easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
