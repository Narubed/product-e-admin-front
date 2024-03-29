import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "~/components/features/accordion/card";
import useCurrentUser from "@/lib/hook/useCurrentUser";
import { mainMenu } from "~/utils/data/menu";

function MobileMenu(props) {
  const { logout } = useCurrentUser();
  const [search, setSearch] = useState("");
  const [timer, setTimer] = useState(null);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("resize", hideMobileMenuHandler);
    document.querySelector("body").addEventListener("click", onBodyClick);

    return () => {
      window.removeEventListener("resize", hideMobileMenuHandler);
      document.querySelector("body").removeEventListener("click", onBodyClick);
    };
  }, []);

  useEffect(() => {
    setSearch("");
  }, [router.query.slug]);

  const hideMobileMenuHandler = () => {
    if (window.innerWidth > 991) {
      document.querySelector("body").classList.remove("mmenu-active");
    }
  };

  const hideMobileMenu = () => {
    document.querySelector("body").classList.remove("mmenu-active");
  };

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  function onBodyClick(e) {
    if (e.target.closest(".header-search"))
      return (
        e.target.closest(".header-search").classList.contains("show-results") ||
        e.target.closest(".header-search").classList.add("show-results")
      );

    document.querySelector(".header-search.show") &&
      document.querySelector(".header-search.show").classList.remove("show");
    document.querySelector(".header-search.show-results") &&
      document
        .querySelector(".header-search.show-results")
        .classList.remove("show-results");
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: "/shop",
      query: {
        search: search,
      },
    });
  }

  return (
    <div className="mobile-menu-wrapper">
      <div className="mobile-menu-overlay" onClick={hideMobileMenu}></div>

      {/* <Link href=""> */}
      <a className="mobile-menu-close" onClick={hideMobileMenu}>
        <i className="d-icon-times"></i>
      </a>
      {/* </Link> */}

      <div className="mobile-menu-container scrollable">
        <form
          action="/"
          className="input-wrapper"
          onSubmit={onSubmitSearchForm}
        >
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            value={search}
            onChange={onSearchChange}
            placeholder="Search your keyword..."
            required
          />
          <button className="btn btn-search" type="submit">
            <i className="d-icon-search"></i>
          </button>
        </form>

        <ul className="mobile-menu mmenu-anim">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Card title="สินค้าของบริษัท" type="mobile" url="/pages/about-us">
              <ul>
                {mainMenu.products.map((item, index) => (
                  <div key={`other-${item.title}`}>
                    <Link href={"/" + item.url}>
                      <a>
                        {item.title}
                        {item.new && <span className="tip tip-new">New</span>}
                        {item.hot ? (
                          <span className="tip tip-hot">Hot</span>
                        ) : (
                          ""
                        )}
                      </a>
                    </Link>
                  </div>
                ))}
              </ul>
            </Card>
          </li>

          <li>
            <Card title="พาร์ทเนอร์" type="mobile" url="/partners/store">
              <ul>
                <li>
                  <Card title="ร้านพาร์ทเนอร์ (store)" type="mobile">
                    <ul>
                      {mainMenu.partners.variation1.map((item, index) => (
                        <div key={item.title}>
                          <Link href={"/" + item.url}>
                            <a>
                              {item.title}
                              {item.hot ? (
                                <span className="tip tip-hot">Hot</span>
                              ) : (
                                ""
                              )}
                            </a>
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </Card>
                </li>
                <li>
                  <Card title="บริษัทพาร์ทเนอร์ (Company)" type="mobile">
                    <ul>
                      {mainMenu.partners.variation2.map((item, index) => (
                        <div key={item.title}>
                          <Link href={"/" + item.url}>
                            <a>
                              {item.title}
                              {item.new ? (
                                <span className="tip tip-new">New</span>
                              ) : (
                                ""
                              )}
                            </a>
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </Card>
                </li>
              </ul>
            </Card>
          </li>

          <li>
            <Card
              title="Products"
              type="mobile"
              url="/product/default/awesome-computer-bag"
            >
              <ul>
                <li>
                  <Card title="Product Pages" type="mobile">
                    {mainMenu.product.pages.map((item, index) => (
                      <div key={item.title}>
                        <Link
                          href={"/" + item.url}
                          key={`product-${item.title}`}
                        >
                          <a>
                            {item.title}
                            {item.hot ? (
                              <span className="tip tip-hot">Hot</span>
                            ) : (
                              ""
                            )}
                          </a>
                        </Link>
                      </div>
                    ))}
                    {/* <Link href={"/" + item.url} key={`product-${item.title}`}>
                        <a>{item.title}</a>
                        {item.hot ? (
                          <span className="tip tip-hot">Hot</span>
                        ) : (
                          ""
                        )}
                      </Link>
                    ))} */}
                  </Card>
                </li>

                <li>
                  <Card title="Product Layouts" type="mobile">
                    <ul>
                      {mainMenu.product.layout.map((item, index) => (
                        <div key={`product-${item.title}`}>
                          <Link href={"/" + item.url}>
                            <a>
                              {item.title}
                              {item.new ? (
                                <span className="tip tip-new">New</span>
                              ) : (
                                ""
                              )}
                            </a>
                          </Link>
                        </div>
                      ))}
                    </ul>
                  </Card>
                </li>
              </ul>
            </Card>
          </li>

          <li>
            <Card title="Pages" type="mobile" url="/pages/about-us">
              <ul>
                {mainMenu.other.map((item, index) => (
                  <div key={`other-${item.title}`}>
                    <Link href={"/" + item.url}>
                      <a>
                        {item.title}
                        {item.new && <span className="tip tip-new">New</span>}
                      </a>
                    </Link>
                  </div>
                ))}
              </ul>
            </Card>
          </li>

          <li>
            <Link href="/">Buy Riode!</Link>
          </li>
          <li>
            <a onClick={logout} style={{ cursor: "pointer" }}>
              ออกจากระบบ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(MobileMenu);
