(window["webpackJsonpscm-web-app"] =
  window["webpackJsonpscm-web-app"] || []).push([
  [0],
  {
    194: function (e, n, t) {},
    381: function (e, n, t) {
      e.exports = t(613);
    },
    613: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t(0),
        r = t.n(a),
        l = t(32),
        i = t.n(l),
        o = t(18),
        c = t(21),
        d = t(29),
        m = t(30),
        s = t(22),
        p = t(327),
        u = t.n(p),
        f = t(164),
        g = t(36),
        x = Object(g.a)(),
        b = (function (e) {
          Object(d.a)(t, e);
          var n = Object(m.a)(t);
          function t() {
            return Object(o.a)(this, t), n.apply(this, arguments);
          }
          return t;
        })(a.Component),
        h = t(1),
        E = t(2),
        w = (t(470), t(329)),
        v = t.n(w).a.new({ place: "topRight", duration: 1, maxCount: 2 }),
        A = {
          truncateTxnAddress: function (e) {
            var n = e.slice(0, 7),
              t = e.slice(-5);
            return console.log(n, t), n + "..." + t;
          },
          getHeader: function () {},
          apiFailureToast: function (e) {
            v.error(e || "apiConstant.API_FAILURE");
          },
          apiSuccessToast: function (e) {
            v.success(e || "apiConstant.API_SUCCESS");
          },
          isNumber: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
          },
          trackEvent: function (e, n) {},
          navigateToPath: function (e) {
            x.push(e);
          },
          toggleDropDown: function (e) {},
          isEmpty: function (e) {
            return !e || 0 === e.trim().length;
          },
          isMenuActive: function (e) {
            return window.location.pathname.includes(e);
          },
        };
      var y,
        j,
        O,
        k,
        C,
        T,
        z = t(7),
        S = t(13),
        R =
          (t(194),
          E.a.img(
            y ||
              (y = Object(h.a)([
                "\n  width: 55px;\n  height: 40px;\n  border-radius: 50%;\n  margin-top: 10px;\n  margin-left: 7px;\n",
              ]))
          )),
        D = E.a.div(
          j ||
            (j = Object(h.a)([
              "\n  width: 100%;\n  background: #091f5c 0% 0% no-repeat padding-box;\n  opacity: 1;\n  padding: 5px;\n  @media (max-width: 768px) {\n    padding-top: 42px;\n  }\n",
            ]))
        ),
        N = E.a.img(O || (O = Object(h.a)(["\n  margin-right: 17px;\n"]))),
        M = E.a.img(
          k ||
            (k = Object(h.a)([
              "\n  margin-right: 17px;\n  @media (max-width: 768px) {\n    display: none;\n   \n  \n",
            ]))
        ),
        F = E.a.div(C || (C = Object(h.a)([""]))),
        _ = E.a.div(
          T ||
            (T = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n",
            ]))
        );
      var B,
        L,
        I,
        P,
        X,
        V = function () {
          var e = Object(a.useState)(!0),
            n = Object(z.a)(e, 2),
            t = n[0],
            l = n[1];
          return r.a.createElement(
            D,
            null,
            r.a.createElement(
              _,
              null,
              r.a.createElement(
                "div",
                { style: { display: "flex", marginLeft: "12px" } },
                r.a.createElement(M, {
                  src: "/images/Grid.svg",
                  onClick: function () {
                    return l(t);
                  },
                }),
                r.a.createElement(N, { src: "/images/Logo.svg" })
              ),
              r.a.createElement(
                F,
                null,
                r.a.createElement(
                  S.Row,
                  null,
                  r.a.createElement(R, { src: "/images/kakashi.png" })
                )
              )
            )
          );
        },
        G = E.a.div(
          B ||
            (B = Object(h.a)([
              "\n  // width: 100%;\n  // max-width: 200px;\n\n  // @media (min-width: 300px) and (max-width: 1024px) {\n  //   // display: none;\n  //   position: absolute;\n  //   z-index: 1;\n  // }\n  background: #102c78 0% 0% no-repeat padding-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* min-height: 100vh; */\n  height: 100%;\n  width: 280px;\n  padding-top: 15px;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n",
            ]))
        ),
        K = E.a.img(
          L ||
            (L = Object(h.a)(["\n  cursor: pointer;\n  margin-right: 13px;\n"]))
        ),
        U = E.a.div(
          I ||
            (I = Object(h.a)([
              "\n  flex-wrap: wrap;\n  cursor: pointer;\n  width: 100%;\n  max-width: 240px;\n  white-space: nowrap;\n  padding: 23px;\n  &:hover {\n    background: #1d3c93;\n  }\n",
            ]))
        ),
        H = E.a.span(P || (P = Object(h.a)(["\n  color: #ffffff;\n"])));
      function W(e) {
        var n = r.a.useState("/images/abouticon_blue.svg"),
          t = Object(z.a)(n, 2),
          a = t[0],
          l = t[1],
          i = r.a.useState("/images/Transactions.svg"),
          o = Object(z.a)(i, 2),
          c = o[0],
          d = o[1],
          m = r.a.useState("/images/Transactions.svg"),
          s = Object(z.a)(m, 2),
          p = s[0],
          u = s[1],
          f = r.a.useState("/images/networks.svg"),
          g = Object(z.a)(f, 2),
          b = g[0],
          h = g[1],
          E = r.a.useState("/images/Analytics.svg"),
          w = Object(z.a)(E, 2),
          v = w[0],
          A = w[1],
          y = r.a.useState("/images/Alerting.svg"),
          j = Object(z.a)(y, 2),
          O = j[0],
          k = j[1],
          C = function (e) {
            "about" === e && l("/images/abouticon_white.svg"),
              "Transaction" === e && d("/images/Transactions_white.svg"),
              "Contracts" === e && u("/images/contracts_white.svg"),
              "Networks" === e && h("/images/networks_white.svg"),
              "Analytics" === e && A("/images/Analytics_white.svg"),
              "Alerting" === e && k("/images/Alerting_white.svg");
          },
          T = function (e) {
            "about" === e && l("/images/abouticon_blue.svg"),
              "Transaction" === e && d("/images/Transactions.svg"),
              "Networks" === e && h("/images/networks.svg"),
              "Contracts" === e && u("/images/contracts.svg"),
              "Analytics" === e && A("/images/Analytics.svg"),
              "Alerting" === e && k("/images/Alerting.svg");
          };
        return r.a.createElement(
          G,
          null,
          r.a.createElement(
            U,
            {
              onClick: function () {
                x.push("/dashboard/about");
              },
              style: { marginTop: "4rem" },
              onMouseOver: function () {
                return C("about");
              },
              onMouseOut: function () {
                return T("about");
              },
            },
            r.a.createElement(K, { src: a }),
            r.a.createElement(H, null, "About Xmartly")
          ),
          r.a.createElement(
            U,
            {
              onClick: function () {
                x.push("/dashboard/transaction-list");
              },
              onMouseOver: function () {
                return C("Transaction");
              },
              onMouseOut: function () {
                return T("Transaction");
              },
            },
            r.a.createElement(K, { src: c }),
            r.a.createElement(H, null, "Transactions")
          ),
          r.a.createElement(
            U,
            {
              onClick: function () {
                x.push("/dashboard/contract");
              },
              onMouseOver: function () {
                return C("Contracts");
              },
              onMouseOut: function () {
                return T("Contracts");
              },
            },
            r.a.createElement(K, { src: p }),
            r.a.createElement(H, null, "Contracts")
          ),
          r.a.createElement(
            U,
            {
              onClick: function () {
                x.push("/dashboard/network");
              },
              onMouseOver: function () {
                return C("Networks");
              },
              onMouseOut: function () {
                return T("Networks");
              },
            },
            r.a.createElement(K, { src: b }),
            r.a.createElement(H, null, "Networks")
          ),
          r.a.createElement(
            U,
            {
              onClick: function () {
                x.push("/dashboard/analytics");
              },
              onMouseOver: function () {
                return C("Analytics");
              },
              onMouseOut: function () {
                return T("Analytics");
              },
            },
            r.a.createElement(K, { src: v }),
            r.a.createElement(H, null, "Analytics")
          ),
          r.a.createElement(
            U,
            {
              onClick: function () {
                x.push("/dashboard/rules");
              },
              onMouseOver: function () {
                return C("Alerting");
              },
              onMouseOut: function () {
                return T("Alerting");
              },
            },
            r.a.createElement(K, { src: O }),
            r.a.createElement(H, null, "Alerting")
          ),
          r.a.createElement(
            U,
            {
              style: { marginTop: "8rem" },
              onClick: function () {
                x.push("/");
              },
            },
            r.a.createElement(K, { src: "/images/Subtraction 2.svg" }),
            r.a.createElement(H, null, "FAQs")
          ),
          r.a.createElement(
            U,
            {
              onClick: function () {
                x.push("/");
              },
            },
            r.a.createElement(K, { src: "/images/Log out.svg" }),
            r.a.createElement(H, null, "Logout")
          ),
          r.a.createElement(
            ne,
            null,
            r.a.createElement("img", { alt: "", src: "/images/Group 12.svg" })
          )
        );
      }
      var J,
        Q,
        Y,
        q,
        Z,
        $,
        ee,
        ne = E.a.div(
          X ||
            (X = Object(h.a)([
              "\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n",
            ]))
        ),
        te = E.a.img(
          J ||
            (J = Object(h.a)([
              "\n  width: 25px;\n  height: 25px;\n  margin: 5px 12px 0px 9px;\n  position: absolute;\n  left: 123px;\n  top: 51px;\n  cursor: pointer;\n  @media (min-width: 769px) {\n    display: none;\n  }\n",
            ]))
        ),
        ae = E.a.div(
          Q ||
            (Q = Object(h.a)([
              "\n  position: absolute;\n  z-index: 1000;\n  background: #102c78 0% 0% no-repeat padding-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  height: 100%;\n  width: 280px;\n  padding-top: 15px;\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n",
            ]))
        ),
        re = E.a.img(
          Y ||
            (Y = Object(h.a)(["\n  cursor: pointer;\n  margin-right: 13px;\n"]))
        ),
        le = E.a.div(
          q ||
            (q = Object(h.a)([
              "\n  flex-wrap: wrap;\n  cursor: pointer;\n  width: 100%;\n  max-width: 240px;\n  white-space: nowrap;\n  padding: 23px;\n  &:hover {\n    background: #1d3c93;\n  }\n",
            ]))
        ),
        ie = E.a.span(Z || (Z = Object(h.a)(["\n  color: #ffffff;\n"])));
      function oe(e) {
        var n = Object(a.useState)(!1),
          t = Object(z.a)(n, 2),
          l = t[0],
          i = t[1],
          o = r.a.useState("/images/Transactions.svg"),
          c = Object(z.a)(o, 2),
          d = c[0],
          m = c[1],
          s = r.a.useState("/images/Transactions.svg"),
          p = Object(z.a)(s, 2),
          u = p[0],
          f = p[1],
          g = r.a.useState("/images/networks.svg"),
          b = Object(z.a)(g, 2),
          h = b[0],
          E = b[1],
          w = r.a.useState("/images/Analytics.svg"),
          v = Object(z.a)(w, 2),
          A = v[0],
          y = v[1],
          j = r.a.useState("/images/Alerting.svg"),
          O = Object(z.a)(j, 2),
          k = O[0],
          C = O[1],
          T = function (e) {
            "Transaction" === e && m("/images/Transactions_white.svg"),
              "Contracts" === e && f("/images/contracts_white.svg"),
              "Networks" === e && E("/images/networks_white.svg"),
              "Analytics" === e && y("/images/Analytics_white.svg"),
              "Alerting" === e && C("/images/Alerting_white.svg");
          },
          S = function (e) {
            "Transaction" === e && m("/images/Transactions.svg"),
              "Networks" === e && E("/images/networks.svg"),
              "Contracts" === e && f("/images/contracts.svg"),
              "Analytics" === e && y("/images/Analytics.svg"),
              "Alerting" === e && C("/images/Alerting.svg");
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(te, {
            src: "/images/overview_grey.svg",
            onClick: function () {
              return i(!l);
            },
          }),
          l &&
            r.a.createElement(
              ae,
              null,
              r.a.createElement(
                le,
                {
                  onClick: function () {
                    x.push("/");
                  },
                  style: { marginTop: "4rem" },
                },
                r.a.createElement(re, { src: "/images/Xmartly.svg" }),
                r.a.createElement(ie, null, "About Xmartly")
              ),
              r.a.createElement(
                le,
                {
                  onClick: function () {
                    x.push("/dashboard/transaction-list");
                  },
                  onMouseOver: function () {
                    return T("Transaction");
                  },
                  onMouseOut: function () {
                    return S("Transaction");
                  },
                },
                r.a.createElement(re, { src: d }),
                r.a.createElement(ie, null, "Transactions")
              ),
              r.a.createElement(
                le,
                {
                  onClick: function () {
                    x.push("/dashboard/contract");
                  },
                  onMouseOver: function () {
                    return T("Contracts");
                  },
                  onMouseOut: function () {
                    return S("Contracts");
                  },
                },
                r.a.createElement(re, { src: u }),
                r.a.createElement(ie, null, "Contracts")
              ),
              r.a.createElement(
                le,
                {
                  onClick: function () {
                    x.push("/dashboard/network");
                  },
                  onMouseOver: function () {
                    return T("Networks");
                  },
                  onMouseOut: function () {
                    return S("Networks");
                  },
                },
                r.a.createElement(re, { src: h }),
                r.a.createElement(ie, null, "Networks")
              ),
              r.a.createElement(
                le,
                {
                  onClick: function () {
                    x.push("/dashboard/analytics");
                  },
                  onMouseOver: function () {
                    return T("Analytics");
                  },
                  onMouseOut: function () {
                    return S("Analytics");
                  },
                },
                r.a.createElement(re, { src: A }),
                r.a.createElement(ie, null, "Analytics")
              ),
              r.a.createElement(
                le,
                {
                  onClick: function () {
                    x.push("/dashboard/Alerting");
                  },
                  onMouseOver: function () {
                    return T("Alerting");
                  },
                  onMouseOut: function () {
                    return S("Alerting");
                  },
                },
                r.a.createElement(re, { src: k }),
                r.a.createElement(ie, null, "Alerting")
              ),
              r.a.createElement(
                le,
                { style: { marginTop: "8rem" } },
                r.a.createElement(re, { src: "/images/Subtraction 2.svg" }),
                r.a.createElement(ie, null, "FAQs")
              ),
              r.a.createElement(
                le,
                {
                  onClick: function () {
                    x.push("/");
                  },
                },
                r.a.createElement(re, { src: "/images/Log out.svg" }),
                r.a.createElement(ie, null, "Logout")
              ),
              r.a.createElement(
                ue,
                null,
                r.a.createElement("img", {
                  alt: "",
                  src: "/images/Group 12.svg",
                })
              )
            )
        );
      }
      var ce,
        de,
        me,
        se,
        pe,
        ue = E.a.div(
          $ ||
            ($ = Object(h.a)([
              "\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n",
            ]))
        ),
        fe =
          (E.a.div(ee || (ee = Object(h.a)(["\n  margin-top: 8rem;\n"]))),
          t(15)),
        ge = t.n(fe),
        xe = t(28),
        be = t(161),
        he = t(687),
        Ee = t(685),
        we = Object(Ee.a)(function () {
          return { dialogBox: { width: "100% !important" } };
        });
      function ve(e) {
        var n = we();
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            he.a,
            { classes: { paper: n.dialogBox }, open: !0 },
            r.a.createElement(
              ze,
              null,
              r.a.createElement(
                Se,
                null,
                r.a.createElement(
                  Re,
                  null,
                  r.a.createElement(De, null, "Contract ABI"),
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/XDC-Cross.svg",
                    onClick: e.click,
                  })
                ),
                r.a.createElement(Ne, null, "Code")
              )
            )
          )
        );
      }
      var Ae,
        ye,
        je,
        Oe,
        ke,
        Ce,
        Te,
        ze = E.a.div(
          ce ||
            (ce = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        Se = E.a.div(
          de ||
            (de = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n\n  border-radius: 6px;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 700px;\n  height: 300px;\n  padding: 20px;\n",
            ]))
        ),
        Re = E.a.div(
          me ||
            (me = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        ),
        De = E.a.div(
          se ||
            (se = Object(h.a)([
              "\n  font: normal normal 600 24px/29px Inter;\n  color: #303134;\n",
            ]))
        ),
        Ne = E.a.div(
          pe ||
            (pe = Object(h.a)([
              "\n  background-color: #f0f2fc;\n  border-radius: 4px;\n  width: 100%;\n  max-width: 650px;\n  height: 220px;\n  margin-top: 8px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  color: #aaadc4;\n  font-size: 45px;\n",
            ]))
        ),
        Me = Object(Ee.a)(function () {
          return { dialogBox: { width: "100% !important", top: "-15%" } };
        });
      function Fe(e) {
        var n = Me();
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            he.a,
            { classes: { paper: n.dialogBox }, open: !0 },
            r.a.createElement(
              Ge,
              null,
              r.a.createElement(
                Ke,
                null,
                r.a.createElement(
                  Ue,
                  null,
                  r.a.createElement(He, null, "Rename Contract"),
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/XDC-Cross.svg",
                    onClick: e.click,
                  })
                ),
                r.a.createElement(We, { type: "text" }),
                r.a.createElement(
                  Ue,
                  {
                    style: {
                      width: "100%",
                      maxWidth: "160px",
                      marginTop: "30px",
                    },
                  },
                  r.a.createElement(Je, null, "Rename"),
                  r.a.createElement(Qe, null, "Cancel")
                )
              )
            )
          )
        );
      }
      var _e,
        Be,
        Le,
        Ie,
        Pe,
        Xe,
        Ve,
        Ge = E.a.div(
          Ae ||
            (Ae = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        Ke = E.a.div(
          ye ||
            (ye = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n\n  border-radius: 6px;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 700px;\n  height: 200px;\n  padding: 20px;\n",
            ]))
        ),
        Ue = E.a.div(
          je ||
            (je = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        ),
        He = E.a.div(
          Oe ||
            (Oe = Object(h.a)([
              "\n  font: normal normal 600 24px/29px Inter;\n  color: #303134;\n",
            ]))
        ),
        We = E.a.input(
          ke ||
            (ke = Object(h.a)([
              '\n  background: #f0f2fc 0% 0% no-repeat padding-box;\n\n  padding: 7px;\n  border: 0px;\n  width: 100%;\n  max-width: 636px;\n  margin-top: 30px;\n  background-image: url("/images/globe.svg");\n  background-repeat: no-repeat;\n  background-position: 8px;\n  padding-left: 35px;\n  background-size: 20px;\n  color: #436ce0;\n',
            ]))
        ),
        Je = E.a.button(
          Ce ||
            (Ce = Object(h.a)([
              "\n  font: normal normal medium 14px/17px Inter;\n  letter-spacing: 0px;\n  color: #ffffff;\n  background: #3163f0 0% 0% no-repeat padding-box;\n  border: 0px;\n  border-radius: 4px;\n  text-align: center;\n",
            ]))
        ),
        Qe = E.a.button(
          Te ||
            (Te = Object(h.a)([
              "\n  font: normal normal medium 14px/17px Inter;\n  color: #3163f0;\n  border-radius: 4px;\n  background-color: #ffffff;\n  border: 1px solid #3163f0;\n  text-align: center;\n",
            ]))
        ),
        Ye = Object(Ee.a)(function () {
          return { dialogBox: { width: "100% !important" } };
        });
      function qe(e) {
        var n = Ye();
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            he.a,
            { classes: { paper: n.dialogBox }, open: !0 },
            r.a.createElement(
              ln,
              null,
              r.a.createElement(
                on,
                null,
                r.a.createElement(
                  cn,
                  null,
                  r.a.createElement(dn, null, "Remove Contract"),
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/XDC-Cross.svg",
                    onClick: e.click,
                  })
                ),
                r.a.createElement(
                  pn,
                  null,
                  "Are you sure you wish to remove the contract? This will remove the contract from the transaction listing, and affect all the alerts that use this contract."
                ),
                r.a.createElement(
                  cn,
                  {
                    style: {
                      width: "100%",
                      maxWidth: "220px",
                      marginTop: "30px",
                    },
                  },
                  r.a.createElement(mn, null, "Remove Contract"),
                  r.a.createElement(sn, null, "Cancel")
                )
              )
            )
          )
        );
      }
      var Ze,
        $e,
        en,
        nn,
        tn,
        an,
        rn,
        ln = E.a.div(
          _e ||
            (_e = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        on = E.a.div(
          Be ||
            (Be = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n\n  border-radius: 6px;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 700px;\n  height: 200px;\n  padding: 20px;\n",
            ]))
        ),
        cn = E.a.div(
          Le ||
            (Le = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        ),
        dn = E.a.div(
          Ie ||
            (Ie = Object(h.a)([
              "\n  font: normal normal 600 24px/29px Inter;\n  color: #303134;\n",
            ]))
        ),
        mn = E.a.button(
          Pe ||
            (Pe = Object(h.a)([
              "\n  font: normal normal medium 14px/17px Inter;\n  letter-spacing: 0px;\n  color: #ffffff;\n  background: #3163f0 0% 0% no-repeat padding-box;\n  border: 0px;\n  border-radius: 4px;\n  text-align: center;\n  white-space: nowrap;\n",
            ]))
        ),
        sn = E.a.button(
          Xe ||
            (Xe = Object(h.a)([
              "\n  font: normal normal medium 14px/17px Inter;\n  color: #3163f0;\n  border-radius: 4px;\n  background-color: #ffffff;\n  border: 1px solid #3163f0;\n  text-align: center;\n",
            ]))
        ),
        pn = E.a.div(
          Ve ||
            (Ve = Object(h.a)([
              "\n  font: normal normal medium 16px/20px Inter;\n  letter-spacing: 0px;\n  color: #303134;\n  margin-top: 20px;\n",
            ]))
        ),
        un = { POST: "POST", PUT: "PUT", GET: "GET", DELETE: "DELETE" },
        fn = {
          APPLICATION_JSON: "application/json",
          MULTIPART_FORM_DATA: "multipart/form-data",
          APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
          IMAGE_PNG: "image/png",
        },
        gn = { GET_CONTRACTS_LIST: "/contract-list" },
        xn = function (e, n, t, a) {
          var r = {
            method: e,
            headers: n || { "Content-Type": "application/json" },
          };
          return (
            e !== un.GET && (r.body = JSON.stringify(t)),
            fetch(a, r)
              .then(function (e) {
                return e.text().then(function (n) {
                  var t = n && JSON.parse(n);
                  if (!t.success) {
                    var a =
                      404 === t.responseCode
                        ? t
                        : (t && t.message) || e.statusText;
                    return Promise.reject(a);
                  }
                  return t;
                });
              })
              .catch(function (e) {
                return e;
              })
          );
        },
        bn = {
          getContractsList: function (e) {
            return En.apply(this, arguments);
          },
          addContract: function (e) {
            return wn.apply(this, arguments);
          },
          getContractsById: function (e) {
            return vn.apply(this, arguments);
          },
          hideContract: function (e) {
            return An.apply(this, arguments);
          },
          showContract: function (e) {
            return yn.apply(this, arguments);
          },
          checkAddress: function (e) {
            return jn.apply(this, arguments);
          },
        };
      function hn() {
        return { "Content-Type": fn.APPLICATION_JSON, skip: !0 };
      }
      function En() {
        return (En = Object(xe.a)(
          ge.a.mark(function e(n) {
            var t;
            return ge.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t =
                        "http://xdc-scm-elb-dev-18733672.us-east-1.elb.amazonaws.com:3000" +
                        gn.GET_CONTRACTS_LIST),
                      console.log("url----", t),
                      e.abrupt(
                        "return",
                        xn(un.POST, hn(), n, t)
                          .then(function (e) {
                            return e.success &&
                              200 === e.responseCode &&
                              e.responseData &&
                              0 !== e.responseData.length
                              ? Promise.resolve(e.responseData)
                              : Promise.reject(e);
                          })
                          .catch(function (e) {
                            return Promise.reject(e);
                          })
                      )
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function wn() {
        return (wn = Object(xe.a)(
          ge.a.mark(function e(n) {
            var t;
            return ge.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t =
                        "http://xdc-scm-elb-dev-18733672.us-east-1.elb.amazonaws.com:3000/contract"),
                      console.log("url----", t),
                      e.abrupt(
                        "return",
                        xn(un.POST, hn(), n, t)
                          .then(function (e) {
                            return e.success &&
                              200 === e.responseCode &&
                              e.responseData &&
                              0 !== e.responseData.length
                              ? Promise.resolve(e.responseData)
                              : Promise.reject(e);
                          })
                          .catch(function (e) {
                            return Promise.reject(e);
                          })
                      )
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function vn() {
        return (vn = Object(xe.a)(
          ge.a.mark(function e(n) {
            var t;
            return ge.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = "http://localhost:3001/contract?id=" + n),
                      console.log("url----", t),
                      e.abrupt(
                        "return",
                        xn(un.GET, hn(), n, t)
                          .then(function (e) {
                            return e.success &&
                              200 === e.responseCode &&
                              e.responseData &&
                              0 !== e.responseData.length
                              ? Promise.resolve(e.responseData)
                              : Promise.reject(e);
                          })
                          .catch(function (e) {
                            return Promise.reject(e);
                          })
                      )
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function An() {
        return (An = Object(xe.a)(
          ge.a.mark(function e(n) {
            var t;
            return ge.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t =
                        "http://xdc-scm-elb-dev-18733672.us-east-1.elb.amazonaws.com:3000/hide-contract"),
                      console.log("url----", t),
                      e.abrupt(
                        "return",
                        xn(un.POST, hn(), n, t)
                          .then(function (e) {
                            return e.success &&
                              200 === e.responseCode &&
                              e.responseData &&
                              0 !== e.responseData.length
                              ? Promise.resolve(e.responseData)
                              : Promise.reject(e);
                          })
                          .catch(function (e) {
                            return Promise.reject(e);
                          })
                      )
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function yn() {
        return (yn = Object(xe.a)(
          ge.a.mark(function e(n) {
            var t;
            return ge.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t =
                        "http://xdc-scm-elb-dev-18733672.us-east-1.elb.amazonaws.com:3000/show-contract"),
                      console.log("url----", t),
                      e.abrupt(
                        "return",
                        xn(un.POST, hn(), n, t)
                          .then(function (e) {
                            return e.success &&
                              200 === e.responseCode &&
                              e.responseData &&
                              0 !== e.responseData.length
                              ? Promise.resolve(e.responseData)
                              : Promise.reject(e);
                          })
                          .catch(function (e) {
                            return Promise.reject(e);
                          })
                      )
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function jn() {
        return (jn = Object(xe.a)(
          ge.a.mark(function e(n) {
            var t;
            return ge.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t =
                        "http://localhost:3001/check-address?contractAddress=" +
                        n),
                      console.log("url----", t),
                      e.abrupt(
                        "return",
                        xn(un.GET, hn(), {}, t)
                          .then(function (e) {
                            return e.success &&
                              200 === e.responseCode &&
                              e.responseData &&
                              0 !== e.responseData.length
                              ? Promise.resolve(e.responseData)
                              : Promise.reject(e);
                          })
                          .catch(function (e) {
                            return Promise.reject(e);
                          })
                      )
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var On = Object(Ee.a)(function () {
        return { dialogBox: { width: "100% !important" } };
      });
      function kn(e) {
        console.log(e);
        var n = On();
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            he.a,
            { classes: { paper: n.dialogBox }, open: !0 },
            r.a.createElement(
              Mn,
              null,
              r.a.createElement(
                Fn,
                null,
                r.a.createElement(
                  _n,
                  null,
                  r.a.createElement(Bn, null, "Hide Contract"),
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/XDC-Cross.svg",
                    onClick: e.click,
                  })
                ),
                r.a.createElement(
                  Pn,
                  null,
                  "Are you sure you wish to hide this contract from the transaction listing?"
                ),
                r.a.createElement(
                  _n,
                  {
                    style: {
                      width: "100%",
                      maxWidth: "200px",
                      marginTop: "30px",
                    },
                  },
                  r.a.createElement(
                    Ln,
                    { onClick: e.hideContract },
                    "Hide Contract"
                  ),
                  r.a.createElement(In, null, "Cancel")
                )
              )
            )
          )
        );
      }
      var Cn,
        Tn,
        zn,
        Sn,
        Rn,
        Dn,
        Nn,
        Mn = E.a.div(
          Ze ||
            (Ze = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        Fn = E.a.div(
          $e ||
            ($e = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n\n  border-radius: 6px;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 700px;\n  height: 200px;\n  padding: 20px;\n",
            ]))
        ),
        _n = E.a.div(
          en ||
            (en = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        ),
        Bn = E.a.div(
          nn ||
            (nn = Object(h.a)([
              "\n  font: normal normal 600 24px/29px Inter;\n  color: #303134;\n",
            ]))
        ),
        Ln = E.a.button(
          tn ||
            (tn = Object(h.a)([
              "\n  font: normal normal medium 14px/17px Inter;\n  letter-spacing: 0px;\n  color: #ffffff;\n  background: #3163f0 0% 0% no-repeat padding-box;\n  border: 0px;\n  border-radius: 4px;\n  text-align: center;\n  white-space: nowrap;\n",
            ]))
        ),
        In = E.a.button(
          an ||
            (an = Object(h.a)([
              "\n  font: normal normal medium 14px/17px Inter;\n  color: #3163f0;\n  border-radius: 4px;\n  background-color: #ffffff;\n  border: 1px solid #3163f0;\n  text-align: center;\n",
            ]))
        ),
        Pn = E.a.div(
          rn ||
            (rn = Object(h.a)([
              "\n  font: normal normal medium 16px/20px Inter;\n  letter-spacing: 0px;\n  color: #303134;\n  margin-top: 20px;\n",
            ]))
        ),
        Xn = Object(Ee.a)(function () {
          return { dialogBox: { width: "100% !important" } };
        });
      function Vn(e) {
        console.log(e);
        var n = Xn();
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            he.a,
            { classes: { paper: n.dialogBox }, open: !0 },
            r.a.createElement(
              Hn,
              null,
              r.a.createElement(
                Wn,
                null,
                r.a.createElement(
                  Jn,
                  null,
                  r.a.createElement(Qn, null, "Show Contract"),
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/XDC-Cross.svg",
                    onClick: e.click,
                  })
                ),
                r.a.createElement(
                  Zn,
                  null,
                  "Are you sure you wish to show this contract in the transaction listing?"
                ),
                r.a.createElement(
                  Jn,
                  {
                    style: {
                      width: "100%",
                      maxWidth: "200px",
                      marginTop: "30px",
                    },
                  },
                  r.a.createElement(
                    Yn,
                    { onClick: e.showContract },
                    "Show Contract"
                  ),
                  r.a.createElement(qn, null, "Cancel")
                )
              )
            )
          )
        );
      }
      var Gn,
        Kn,
        Un,
        Hn = E.a.div(
          Cn ||
            (Cn = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        Wn = E.a.div(
          Tn ||
            (Tn = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n\n  border-radius: 6px;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 700px;\n  height: 200px;\n  padding: 20px;\n",
            ]))
        ),
        Jn = E.a.div(
          zn ||
            (zn = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        ),
        Qn = E.a.div(
          Sn ||
            (Sn = Object(h.a)([
              "\n  font: normal normal 600 24px/29px Inter;\n  color: #303134;\n",
            ]))
        ),
        Yn = E.a.button(
          Rn ||
            (Rn = Object(h.a)([
              "\n  font: normal normal medium 14px/17px Inter;\n  letter-spacing: 0px;\n  color: #ffffff;\n  background: #3163f0 0% 0% no-repeat padding-box;\n  border: 0px;\n  border-radius: 4px;\n  text-align: center;\n  white-space: nowrap;\n",
            ]))
        ),
        qn = E.a.button(
          Dn ||
            (Dn = Object(h.a)([
              "\n  font: normal normal medium 14px/17px Inter;\n  color: #3163f0;\n  border-radius: 4px;\n  background-color: #ffffff;\n  border: 1px solid #3163f0;\n  text-align: center;\n",
            ]))
        ),
        Zn = E.a.div(
          Nn ||
            (Nn = Object(h.a)([
              "\n  font: normal normal medium 16px/20px Inter;\n  letter-spacing: 0px;\n  color: #303134;\n  margin-top: 20px;\n",
            ]))
        );
      t(86);
      function $n() {
        return r.a.createElement(
          jt,
          null,
          r.a.createElement(Ot, null, r.a.createElement(kt, null, "Code"))
        );
      }
      var et,
        nt,
        tt,
        at,
        rt,
        lt,
        it,
        ot,
        ct,
        dt,
        mt,
        st,
        pt,
        ut,
        ft,
        gt,
        xt,
        bt,
        ht,
        Et,
        wt,
        vt,
        At,
        yt,
        jt = E.a.div(
          Gn ||
            (Gn = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background-color: #ffffff;\n  margin-top: 33px;\n",
            ]))
        ),
        Ot = E.a.div(
          Kn ||
            (Kn = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  //   border: 1px solid #707070;\n  border-radius: 6px;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 700px;\n  height: 300px;\n\n  padding: 20px;\n",
            ]))
        ),
        kt = E.a.div(
          Un ||
            (Un = Object(h.a)([
              "\n  background-color: #f0f2fc;\n  border-radius: 4px;\n  width: 100%;\n  max-width: 650px;\n  height: 220px;\n  // margin-top: 8px;\n  margin-top: 33px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  color: #aaadc4;\n  font-size: 45px;\n",
            ]))
        );
      function Ct() {
        var e = r.a.useState("General"),
          n = Object(z.a)(e, 2),
          t = n[0],
          l = n[1],
          i = function (e) {
            l(e.target.id);
          },
          o = r.a.useState({}),
          c = Object(z.a)(o, 2),
          d = c[0],
          m = c[1],
          s = (function () {
            var e = Object(xe.a)(
              ge.a.mark(function e() {
                var n, t, a;
                return ge.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = window.location.pathname),
                            (t = (t = n.split("/"))[3]),
                            m(t),
                            (e.prev = 4),
                            (e.next = 7),
                            bn.getContractsById(t)
                          );
                        case 7:
                          (a = e.sent),
                            console.log("response", a),
                            g(a),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12), (e.t0 = e.catch(4)), console.log(e.t0);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 12]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        r.a.useEffect(function () {
          s();
        }, []);
        var p = r.a.useState({}),
          u = Object(z.a)(p, 2),
          f = u[0],
          g = u[1],
          x = Object(a.useState)(""),
          b = Object(z.a)(x, 2),
          h = b[0],
          E = (b[1], Object(a.useState)(!1)),
          w = Object(z.a)(E, 2),
          v = w[0],
          A = w[1],
          y = function () {
            A(!0);
          },
          j = (function () {
            var e = Object(xe.a)(
              ge.a.mark(function e() {
                var n, t;
                return ge.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = { id: d }),
                            (e.prev = 1),
                            (e.next = 4),
                            bn.hideContract(n)
                          );
                        case 4:
                          (t = e.sent),
                            console.log(t),
                            _(!1),
                            window.location.reload(),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(1)), console.log(e.t0);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 10]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          O = (function () {
            var e = Object(xe.a)(
              ge.a.mark(function e() {
                var n, t;
                return ge.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = { id: d }),
                            (e.prev = 1),
                            (e.next = 4),
                            bn.showContract(n)
                          );
                        case 4:
                          (t = e.sent),
                            console.log(t),
                            V(!1),
                            window.location.reload(),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(1)), console.log(e.t0);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 10]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          k = Object(a.useState)(!1),
          C = Object(z.a)(k, 2),
          T = C[0],
          R = C[1],
          D = function () {
            R(!0);
          },
          N = Object(a.useState)(!1),
          M = Object(z.a)(N, 2),
          F = M[0],
          _ = M[1],
          B = function () {
            _(!0);
          },
          L = function () {
            _(!1);
          },
          I = Object(a.useState)(!1),
          P = Object(z.a)(I, 2),
          X = P[0],
          V = P[1],
          G = Object(a.useState)(!1),
          K = Object(z.a)(G, 2),
          U = K[0],
          H = K[1],
          W = function () {
            H(!0);
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            qt,
            null,
            r.a.createElement(
              Ut,
              null,
              r.a.createElement(
                Kt,
                null,
                r.a.createElement(Ht, null, "Contract Details"),
                r.a.createElement(ma, null, "View in Explorer")
              )
            ),
            r.a.createElement(
              Zt,
              null,
              r.a.createElement(
                $t,
                { style: { paddingTop: "0.625rem", paddingLeft: "1rem" } },
                "App_Transactions_Validator"
              ),
              r.a.createElement(
                "div",
                {
                  style: {
                    paddingLeft: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                  },
                },
                f.address,
                r.a.createElement(
                  be.CopyToClipboard,
                  { text: h },
                  r.a.createElement(aa, { src: "/images/copy.svg" })
                )
              ),
              r.a.createElement(
                ca,
                null,
                r.a.createElement(
                  da,
                  {
                    id: "General",
                    onClick: i,
                    style: {
                      color: "General" === t ? "#3163F0" : "#AEB7D0",
                      display: "flex",
                      paddingBottom: "0.875rem",
                      paddingright: "16px",
                      alignItems: "center",
                      borderBottom:
                        "General" === t ? "0.125rem solid #3163F0" : "#AEB7D0",
                    },
                  },
                  r.a.createElement("img", {
                    alt: "",
                    style: { marginRight: "0.375rem" },
                    src:
                      "General" === t
                        ? "/images/genrl.svg"
                        : "/images/general_grey.svg",
                  }),
                  "General"
                ),
                r.a.createElement(
                  da,
                  {
                    id: "Source Code",
                    onClick: i,
                    style: {
                      color: "Source Code" === t ? "#3163F0" : "#AEB7D0",
                      display: "flex",
                      paddingBottom: "0.875rem",
                      paddingright: "16px",
                      alignItems: "center",
                      borderBottom:
                        "Source Code" === t ? "0.125rem solid blue" : "",
                    },
                  },
                  r.a.createElement("img", {
                    alt: "",
                    style: { marginRight: "0.375rem" },
                    src:
                      "Source Code" === t
                        ? "/images/source code_blue.svg"
                        : "/images/source code_grey.svg",
                  }),
                  "Source Code"
                )
              ),
              "General" === t &&
                r.a.createElement(
                  ea,
                  null,
                  r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      na,
                      null,
                      r.a.createElement(ra, null, "Network"),
                      r.a.createElement(ta, null, "XDC Mainnet")
                    ),
                    r.a.createElement(
                      na,
                      null,
                      r.a.createElement(ra, null, "Solidity version"),
                      r.a.createElement(ta, null, f.blockNumber)
                    ),
                    r.a.createElement(
                      na,
                      null,
                      r.a.createElement(ra, null, "Verification"),
                      r.a.createElement(Wt, null, f.status)
                    ),
                    r.a.createElement(
                      na,
                      null,
                      r.a.createElement(ra, null, "Tags"),
                      r.a.createElement(
                        ta,
                        null,
                        r.a.createElement(
                          S.Row,
                          null,
                          r.a.createElement(Qt, null, "Finance"),
                          r.a.createElement(Yt, null, "Add Tag")
                        ),
                        " "
                      )
                    ),
                    r.a.createElement(
                      na,
                      null,
                      r.a.createElement(ra, null, "Compiler"),
                      r.a.createElement(ta, null, f.blockNumber)
                    ),
                    r.a.createElement(
                      na,
                      null,
                      r.a.createElement(ra, null, "EVM version"),
                      r.a.createElement(ta, null, f.blockNumber)
                    ),
                    r.a.createElement(
                      na,
                      null,
                      r.a.createElement(ra, null, "Optimizations"),
                      r.a.createElement(Jt, null, f.status)
                    )
                  ),
                  r.a.createElement(
                    la,
                    null,
                    r.a.createElement(
                      ia,
                      null,
                      r.a.createElement(
                        oa,
                        null,
                        r.a.createElement("img", {
                          alt: "",
                          src: "/images/cube.svg",
                        })
                      ),
                      r.a.createElement(oa, null, "View transactions")
                    ),
                    r.a.createElement(
                      ia,
                      null,
                      v &&
                        r.a.createElement(ve, {
                          click: function () {
                            A(!1);
                          },
                        }),
                      r.a.createElement(
                        oa,
                        {
                          onClick: function () {
                            y();
                          },
                        },
                        r.a.createElement("img", {
                          alt: "",
                          src: "/images/code.svg",
                        })
                      ),
                      r.a.createElement(
                        oa,
                        {
                          onClick: function () {
                            y();
                          },
                        },
                        "Contract ABI"
                      )
                    ),
                    r.a.createElement(
                      ia,
                      null,
                      T &&
                        r.a.createElement(Fe, {
                          click: function () {
                            R(!1);
                          },
                        }),
                      r.a.createElement(
                        oa,
                        {
                          onClick: function () {
                            return D();
                          },
                        },
                        r.a.createElement("img", {
                          alt: "",
                          src: "/images/edit.svg",
                        })
                      ),
                      r.a.createElement(
                        oa,
                        {
                          onClick: function () {
                            return D();
                          },
                        },
                        "Rename Contract"
                      )
                    ),
                    r.a.createElement(
                      ia,
                      null,
                      F && r.a.createElement(kn, { hideContract: j, click: L }),
                      X && r.a.createElement(Vn, { showContract: O, click: L }),
                      f.isHidden
                        ? r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              oa,
                              {
                                onClick: function () {
                                  V(!0);
                                },
                              },
                              r.a.createElement("img", {
                                alt: "",
                                src: "/images/hide.svg",
                              })
                            ),
                            r.a.createElement(
                              oa,
                              {
                                onClick: function () {
                                  return B();
                                },
                              },
                              "Hide Contract"
                            )
                          )
                        : r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              oa,
                              {
                                onClick: function () {
                                  return B();
                                },
                              },
                              r.a.createElement("img", {
                                alt: "",
                                src: "/images/hide.svg",
                              })
                            ),
                            r.a.createElement(
                              oa,
                              {
                                onClick: function () {
                                  return B();
                                },
                              },
                              "Hide Contract"
                            )
                          )
                    ),
                    r.a.createElement(
                      ia,
                      null,
                      U &&
                        r.a.createElement(qe, {
                          click: function () {
                            H(!1);
                          },
                        }),
                      r.a.createElement(
                        oa,
                        {
                          onClick: function () {
                            return W();
                          },
                        },
                        r.a.createElement("img", {
                          alt: "",
                          src: "/images/delete.svg",
                        })
                      ),
                      r.a.createElement(
                        oa,
                        {
                          onClick: function () {
                            return W();
                          },
                        },
                        "Remove Contract"
                      )
                    )
                  )
                ),
              "Source Code" === t && r.a.createElement($n, null)
            )
          )
        );
      }
      var Tt,
        zt,
        St,
        Rt,
        Dt,
        Nt,
        Mt,
        Ft,
        _t,
        Bt,
        Lt,
        It,
        Pt,
        Xt,
        Vt,
        Gt,
        Kt = E.a.div(
          et ||
            (et = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  // max-width: 1100px;\n  @media (min-width: 340px) and (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n\n    padding-bottom: 58px;\n  }\n",
            ]))
        ),
        Ut = E.a.div(
          nt ||
            (nt = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  height: 3.125rem;\n  align-items: center;\n   @media (min-width: 300px) and (max-width: 767px) {\n     padding-top: 47px;\n    padding-bottom: 33px;\n   }\n",
            ]))
        ),
        Ht = E.a.div(
          tt ||
            (tt = Object(h.a)([
              "\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #191919;\n  margin-right: 0.625rem;\n   @media (min-width: 300px) and (max-width: 767px) {\n     font-size: 1rem;\n     padding-bottom:10px;\n   }\n",
            ]))
        ),
        Wt = E.a.div(
          at ||
            (at = Object(h.a)([
              "\n  font-size: 1rem;\n  font-weight: 600;\n  color: #00a58c;\n",
            ]))
        ),
        Jt = E.a.div(
          rt ||
            (rt = Object(h.a)([
              "\n  font-size: 1rem;\n  font-weight: 600;\n  color: #00a58c;\n",
            ]))
        ),
        Qt = E.a.div(
          lt ||
            (lt = Object(h.a)([
              '\n  background-image: url("/images/Tag_logo.svg");\n  background-repeat: no-repeat;\n  background-position: 0.5rem;\n  padding-left: 1.75rem;\n  background-size: 0.875rem;\n  position: relative;\n  background-color: #eaefff;\n  border: 1px solid #eaefff;\n  border-radius: 0.25rem;\n  width: 100%;\n  max-width: 17.75rem;\n  white-space: nowrap;\n  height: 2.125rem;\n  align-items: center;\n  text-align: center;\n  display: flex;\n  font-size: 0.8rem;\n',
            ]))
        ),
        Yt = E.a.button(
          it ||
            (it = Object(h.a)([
              '\n  color: #416be0;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  font-size: 0.8rem;\n  font-weight: 600;\n  border: none;\n  outline: none;\n  white-space: nowrap;\n  background-image: url("/images/globe.svg");\n  background-repeat: no-repeat;\n  background-position: 0.5rem;\n  padding-left: 1.75rem;\n  background-size: 0.875rem;\n  position: relative;\n  background-color: #ffffff;\n\n  border: none;\n  border-radius: 0.25rem;\n  width: 100%;\n  max-width: 17.75rem;\n  white-space: nowrap;\n  height: 2.125rem;\n',
            ]))
        ),
        qt = E.a.div(
          ot ||
            (ot = Object(h.a)([
              "\n  background: #ecf0f7 0% 0% no-repeat padding-box;\n  width: 100%;\n  padding: 3.125rem;\n  height: 100vh;\n",
            ]))
        ),
        Zt = E.a.div(
          ct ||
            (ct = Object(h.a)([
              "\n  background-color: #ffffff;\n  border-radius: 0.375rem;\n  width: 100%;\n  margin-top: 0.625rem;\n  height: 9.25rem;\n",
            ]))
        ),
        $t =
          (E.a.div(dt || (dt = Object(h.a)([""]))),
          E.a.div(
            mt ||
              (mt = Object(h.a)([
                "\n  @media (min-width: 340px) and (max-width: 768px) {\n    font-size: 1rem;\n  }\n",
              ]))
          ),
          E.a.div(
            st ||
              (st = Object(h.a)([
                "\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #102c78;\n  margin-bottom: 10px;\n",
              ]))
          )),
        ea =
          (E.a.input(
            pt ||
              (pt = Object(h.a)([
                "\n  display: flex;\n  flex-flow: row nowrap;\n  margin-top: 0.625rem;\n  font-weight: 600;\n  border: none;\n  width: 100%;\n  max-width: 24.063rem;\n",
              ]))
          ),
          E.a.div(
            ut ||
              (ut = Object(h.a)([
                "\n  background-color: #ffffff;\n  border-radius: 0.375rem;\n  width: 100%;\n  /* height: 35.313rem; */\n  padding: 0.625rem 0.625rem 1.5rem 0.625rem ;\n  margin-top: 1.25rem;\n",
              ]))
          )),
        na = E.a.div(
          ft ||
            (ft = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  border-bottom: 0.063rem solid #e3e7eb;\n  padding: 1.25rem 1.25rem 0.2rem 1.25rem;\n",
            ]))
        ),
        ta = E.a.div(
          gt ||
            (gt = Object(h.a)([
              "\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #191919;\n  width: 100%;\n  max-width: 9.375rem;\n  font-size: 1rem;\n  font-weight: 600;\n",
            ]))
        ),
        aa = E.a.img(
          xt ||
            (xt = Object(h.a)(["\n  margin-left: 9%;\n  cursor: pointer;\n"]))
        ),
        ra = E.a.div(
          bt ||
            (bt = Object(h.a)([
              "\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #102c78;\n  max-width: 18.75rem;\n  width: 100%;\n",
            ]))
        ),
        la = E.a.div(
          ht ||
            (ht = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1rem;\n  width: 100%;\n  max-width: 59.375rem;\n  font-size: 0.875rem;\n",
            ]))
        ),
        ia = E.a.div(
          Et ||
            (Et = Object(h.a)([
              "\n  background: #f5f6fd 0% 0% no-repeat padding-box;\n  border: 0.063rem solid #d5e0ff;\n  border-radius: 0.375rem;\n  width: 100%;\n  max-width: 10.375rem;\n  padding: 0.625rem;\n  height: 3.938rem;\n  color: #1d3c93;\n  font-weight: 600;\n  cursor: pointer;\n",
            ]))
        ),
        oa = E.a.div(
          wt ||
            (wt = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  text-align: center;\n",
            ]))
        ),
        ca = E.a.div(
          vt ||
            (vt = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 18.125rem;\n  margin: 1.563rem 0rem 0.625rem 1.063rem;\n  cursor: pointer;\n  @media (min-width: 340px) and (max-width: 768px) {\n    margin: none;\n    max-width: 15.125rem;\n  }\n",
            ]))
        ),
        da = E.a.div(At || (At = Object(h.a)(["\n  //\n"]))),
        ma = E.a.button(
          yt ||
            (yt = Object(h.a)([
              '\n  background-image: url("/images/globe.svg");\n  background-repeat: no-repeat;\n  background-position: 0.5rem;\n  padding-left: 1.75rem;\n  background-size: 0.875rem;\n  position: relative;\n  background-color: #ffffff;\n  color: #3163f0;\n  border: none;\n  border-radius: 0.25rem;\n  // width: 100%;\n  max-width: 17.75rem;\n  white-space: nowrap;\n  height: 2.125rem;\n  font-size: 0.875rem;\n',
            ]))
        ),
        sa = Object(Ee.a)(function () {
          return { dialogBox: { width: "100% !important" } };
        });
      function pa(e) {
        var n = sa(),
          t = Object(a.useState)(!0),
          l = Object(z.a)(t, 2),
          i = l[0],
          o = l[1],
          c = Object(a.useState)(!1),
          d = Object(z.a)(c, 2),
          m = d[0],
          s = d[1],
          p = r.a.useState(""),
          u = Object(z.a)(p, 2),
          f = u[0],
          g = u[1],
          x = r.a.useState(""),
          b = Object(z.a)(x, 2),
          h = b[0],
          E = b[1];
        console.log("address", m), console.log(e);
        var w = (function () {
            var e = Object(xe.a)(
              ge.a.mark(function e() {
                return ge.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), bn.checkAddress(f);
                        case 3:
                          e.sent && E(f), (e.next = 11);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            console.log(e.t0),
                            A.apiFailureToast("Invalid contract address");
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          v = (function () {
            var n = Object(xe.a)(
              ge.a.mark(function n() {
                var t, a;
                return ge.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (t = { contractAddress: f }),
                            (n.next = 4),
                            bn.addContract(t)
                          );
                        case 4:
                          (a = n.sent).address && a.address === f
                            ? (A.apiSuccessToast("Contract added"),
                              e.click(),
                              e.reloadData())
                            : A.apiFailureToast("Contract not found"),
                            (n.next = 12);
                          break;
                        case 8:
                          (n.prev = 8),
                            (n.t0 = n.catch(0)),
                            "Address already Exists" === n.t0 &&
                              A.apiFailureToast(n.t0),
                            console.log(n.t0);
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function () {
              return n.apply(this, arguments);
            };
          })();
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            he.a,
            { classes: { paper: n.dialogBox }, open: !0 },
            r.a.createElement(
              Fa,
              null,
              r.a.createElement(
                _a,
                null,
                r.a.createElement(
                  Ba,
                  null,
                  r.a.createElement(La, null, "Add Contract"),
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/XDC-Cross.svg",
                    onClick: e.click,
                  })
                ),
                r.a.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    },
                  },
                  r.a.createElement(
                    Ia,
                    null,
                    "You can import contracts that have been verified publicly on XDC."
                  ),
                  r.a.createElement(
                    Va,
                    {
                      onClick: function () {
                        o(!i);
                      },
                    },
                    "Hide steps"
                  )
                ),
                r.a.createElement(Pa, {
                  type: "text",
                  placeholder: "Find a public contract by name or address",
                  onChange: function (e) {
                    return g(e.target.value);
                  },
                  onKeyDown: function (e) {
                    return (function (e) {
                      "Enter" === e.key && w();
                    })(e);
                  },
                }),
                i &&
                  r.a.createElement(
                    Ma,
                    null,
                    "1. Go to XDC Explorer ",
                    r.a.createElement("br", null),
                    "2. Check for an verified contract ",
                    r.a.createElement("br", null),
                    " 3. Copy contract address ",
                    r.a.createElement("br", null),
                    "4. Paste it on the given field below"
                  ),
                "" === h
                  ? ""
                  : r.a.createElement(
                      Ra,
                      null,
                      r.a.createElement(
                        Da,
                        null,
                        r.a.createElement(Ta, { src: "/images/network.svg" }),
                        r.a.createElement(za, null)
                      ),
                      r.a.createElement(
                        Na,
                        null,
                        r.a.createElement(Ca, {
                          type: "checkbox",
                          onChange: function (e) {
                            return s(e.target.checked);
                          },
                        }),
                        r.a.createElement(Sa, null, f)
                      )
                    ),
                r.a.createElement(
                  Xa,
                  {
                    onClick: v,
                    disabled: f.trim().length >= 0 && !m,
                    style: { backgroundColor: "" === f ? "#9DB5F8" : "" },
                  },
                  "Import Contracts"
                )
              )
            )
          )
        );
      }
      var ua,
        fa,
        ga,
        xa,
        ba,
        ha,
        Ea,
        wa,
        va,
        Aa,
        ya,
        ja,
        Oa,
        ka,
        Ca = E.a.input(Tt || (Tt = Object(h.a)(["\n  outline: none;\n"]))),
        Ta = E.a.img(zt || (zt = Object(h.a)(["\n  margin-bottom: 5px;\n"]))),
        za = E.a.div(
          St ||
            (St = Object(h.a)([
              "\n  width: 30px;\n  border-bottom: 2px solid blue;\n",
            ]))
        ),
        Sa = E.a.div(
          Rt ||
            (Rt = Object(h.a)([
              "\n  color: #436ce0;\n\n  margin-left: 5px;\n  font-size: 0.8rem;\n  font-weight: 600;\n",
            ]))
        ),
        Ra = E.a.div(
          Dt ||
            (Dt = Object(h.a)([
              "\n  background-color: #f0f2fc;\n  width: 100%;\n",
            ]))
        ),
        Da = E.a.div(
          Nt ||
            (Nt = Object(h.a)([
              "\n  padding: 8px 8px 0px 8px;\n  border-bottom: 1px solid #c3c3c3;\n",
            ]))
        ),
        Na = E.a.div(
          Mt ||
            (Mt = Object(h.a)([
              "\n  display: flex;\n  padding: 5px;\n  align-items: center;\n  margin-top: 18px;\n",
            ]))
        ),
        Ma = E.a.div(
          Ft ||
            (Ft = Object(h.a)([
              "\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 15px;\n  color: #303134;\n",
            ]))
        ),
        Fa = E.a.div(
          _t ||
            (_t = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        _a = E.a.div(
          Bt ||
            (Bt = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n\n  border-radius: 6px;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 700px;\n\n  padding: 20px;\n",
            ]))
        ),
        Ba = E.a.div(
          Lt ||
            (Lt = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        ),
        La = E.a.div(
          It ||
            (It = Object(h.a)([
              "\n  color: #303134;\n  font-size: 1rem;\n  font-weight: 600;\n",
            ]))
        ),
        Ia = E.a.div(
          Pt ||
            (Pt = Object(h.a)([
              "\n  color: #303134;\n  margin-top: 15px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  white-space: nowrap;\n",
            ]))
        ),
        Pa = E.a.input(
          Xt ||
            (Xt = Object(h.a)([
              '\n  background-image: url("/images/search-icon.svg");\n  background-repeat: no-repeat;\n  background-position: 8px;\n  padding-left: 34px;\n  background-size: 14px;\n  position: relative;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  width: 100%;\n  background-color: #f0f2fc;\n  height: 30px;\n  margin-bottom: 15px;\n  margin-top: 15px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  outline: none;\n  color: #436ce0;\n',
            ]))
        ),
        Xa = E.a.button(
          Vt ||
            (Vt = Object(h.a)([
              "\n  background: #3163f0 0% 0% no-repeat padding-box;\n  border-radius: 4px;\n  border: 0px;\n  color: #ffffff;\n  max-width: 172px;\n  width: 100%;\n  font-size: 0.9rem;\n  font-weight: 600;\n  padding: 6px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  cursor: pointer;\n",
            ]))
        ),
        Va = E.a.button(
          Gt ||
            (Gt = Object(h.a)([
              '\n  border: none;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  background-color: #ffffff;\n  color: #3163f0;\n  cursor: pointer;\n  background-image: url("/images/Arrrow.svg");\n  background-repeat: no-repeat;\n  width: 100%;\n  max-width: 114px;\n  padding-left: 26px;\n  background-position: right;\n  position: relative;\n  margin-top: 12px;\n',
            ]))
        ),
        Ga = t(684);
      function Ka(e) {
        var n = r.a.useState(!1),
          t = Object(z.a)(n, 2),
          a = t[0],
          l = t[1],
          i = (function () {
            var e = Object(xe.a)(
              ge.a.mark(function e() {
                var n, t;
                return ge.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (n = { skip: 0, limit: 10 }),
                            (e.next = 4),
                            bn.getContractsList(n)
                          );
                        case 4:
                          (t = e.sent), m(t.contractList), (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        r.a.useEffect(function () {
          i();
        }, []);
        var o = r.a.useState([]),
          c = Object(z.a)(o, 2),
          d = c[0],
          m = c[1];
        return r.a.createElement(
          rr,
          null,
          r.a.createElement(
            ir,
            null,
            r.a.createElement(
              lr,
              null,
              r.a.createElement(or, null, "Contracts"),
              r.a.createElement(dr, {
                placeholder: "Search by address or name",
              })
            ),
            r.a.createElement(
              nr,
              null,
              r.a.createElement("img", {
                alt: "",
                src: "/images/refresh.svg",
                style: { marginRight: "0.625rem" },
              }),
              a &&
                r.a.createElement(pa, {
                  click: function () {
                    l(!1);
                  },
                }),
              r.a.createElement(
                cr,
                {
                  onClick: function () {
                    l(!0);
                  },
                },
                "Add Contract"
              )
            )
          ),
          r.a.createElement(
            mr,
            null,
            r.a.createElement(
              sr,
              null,
              r.a.createElement(
                S.Row,
                null,
                r.a.createElement(pr, null, "Contract Name"),
                r.a.createElement(pr, null, "Address"),
                r.a.createElement(pr, null, "Network"),
                r.a.createElement(
                  pr,
                  null,
                  "Tag",
                  " ",
                  r.a.createElement(
                    Ga.a,
                    { disableFocusListener: !0, title: "Add" },
                    r.a.createElement(fr, { src: "/images/tool-tip.svg" })
                  )
                ),
                r.a.createElement(pr, null, "Visibility")
              )
            ),
            d.map(function (e, n) {
              return r.a.createElement(
                "div",
                {
                  onClick: function () {
                    return (
                      (n = e._id),
                      void x.push("/dashboard/contract-details/" + n)
                    );
                    var n;
                  },
                },
                r.a.createElement(
                  sr,
                  null,
                  r.a.createElement(
                    S.Row,
                    null,
                    r.a.createElement(ur, null, e.contractName),
                    r.a.createElement(
                      ur,
                      null,
                      A.truncateTxnAddress(e.address)
                    ),
                    r.a.createElement(ur, null, e.tokenName),
                    r.a.createElement(
                      ur,
                      null,
                      r.a.createElement(
                        tr,
                        null,
                        "Finance",
                        r.a.createElement(ar, { src: "/images/Tag_logo.svg" })
                      ),
                      " "
                    ),
                    r.a.createElement(ur, null, e.status)
                  )
                )
              );
            })
          )
        );
      }
      var Ua,
        Ha,
        Wa,
        Ja,
        Qa,
        Ya,
        qa,
        Za,
        $a,
        er,
        nr = E.a.div(
          ua ||
            (ua = Object(h.a)([
              "\n  display: flex;\n  @media (min-width: 340px) and (max-width: 768px) {\n    margin-bottom: 22px;\n  }\n",
            ]))
        ),
        tr = E.a.div(
          fa ||
            (fa = Object(h.a)([
              "\n  background-color: #eaefff;\n  border-radius: 3px;\n\n  color: #436ce0;\n  padding: 2px 2px 2px 25px;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  max-width: 100px;\n  @media (min-width: 340px) and (max-width: 768px) {\n    padding: 2px 14px 2px 25px;\n    margin-right: 56px;\n    margin-left: 36px;\n  }\n",
            ]))
        ),
        ar = E.a.img(
          ga ||
            (ga = Object(h.a)([
              "\n  position: absolute;\n  width: 12px;\n  left: 5px;\n  top: 7px;\n",
            ]))
        ),
        rr = E.a.div(
          xa ||
            (xa = Object(h.a)([
              "\n  background-color: #ecf0f7;\n  width: 100%;\n  height: 100vh;\n  padding: 3.125rem;\n  height: 100vh;\n",
            ]))
        ),
        lr = E.a.div(
          ba ||
            (ba = Object(h.a)([
              "\n  display: flex;\n  width: 100%;\n  @media (min-width: 340px) and (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n\n    padding-bottom: 58px;\n  }\n",
            ]))
        ),
        ir = E.a.div(
          ha ||
            (ha = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  height: 3.125rem;\n  align-items: center;\n  @media (min-width: 300px) and (max-width: 767px) {\n    padding-top: 47px;\n    padding-bottom: 33px;\n  }\n",
            ]))
        ),
        or = E.a.span(
          Ea ||
            (Ea = Object(h.a)([
              "\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #191919;\n  margin-right: 0.625rem;\n  @media (min-width: 300px) and (max-width: 767px) {\n    font-size: 1rem;\n    padding-bottom: 10px;\n  }\n",
            ]))
        ),
        cr = E.a.button(
          wa ||
            (wa = Object(h.a)([
              '\n  background-image: url("/images/Add.svg");\n  background-repeat: no-repeat;\n  background-position: 0.5rem;\n  padding-left: 1.313rem;\n  background-size: 0.875rem;\n  position: relative;\n  background-color: #3163f0;\n  color: #ffffff;\n  border: none;\n  border-radius: 0.25rem;\n  width: 8.125rem;\n  height: 2.125rem;\n  font-size: 0.875rem;\n  @media (min-width: 340px) and (max-width: 768px) {\n    width: 1.225rem;\n    font-size: 0.1px;\n  }\n',
            ]))
        ),
        dr = E.a.input(
          va ||
            (va = Object(h.a)([
              '\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 0.438rem;\n  color: #888888;\n  border: 0rem;\n  padding-left: 1.875rem;\n  background-image: url("/images/search-icon.svg");\n  background-repeat: no-repeat;\n  background-position: 0.5rem;\n  background-size: 0.75rem;\n  position: relative;\n  border: none;\n  outline: none;\n  @media (min-width: 340px) and (max-width: 768px) {\n    padding: 0px;\n    margin-right: 10px;\n    height: 33px;\n    background-image: none;\n  }\n',
            ]))
        ),
        mr = E.a.div(
          Aa ||
            (Aa = Object(h.a)([
              "\n  background-color: #ffffff;\n  border-radius: 0.375rem;\n  width: 100%;\n  min-height: 25rem;\n  /* height: 25rem; */\n  padding: 0.625rem 0.625rem 1px 0.625rem;\n  @media (min-width: 300px) and (max-width: 767px) {\n    overflow: scroll;\n    width: 100%;\n    height: 281px;\n    overflow-y: auto;\n    position: relative;\n    &::-webkit-scrollbar {\n      width: 10px;\n      border: 0.5px solid blue;\n      outline: none;\n    }\n  }\n",
            ]))
        ),
        sr = E.a.div(
          ya ||
            (ya = Object(h.a)([
              "\n  padding: 0.75rem;\n  border-bottom: 0.063rem solid #e3e7eb;\n",
            ]))
        ),
        pr = E.a.div(
          ja ||
            (ja = Object(h.a)([
              "\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #102c78;\n  width: 100%;\n  max-width: 18.75rem;\n  @media (min-width: 300px) and (max-width: 767px) {\n    margin-right: 91px;\n  }\n",
            ]))
        ),
        ur = E.a.div(
          Oa ||
            (Oa = Object(h.a)([
              "\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: #191919;\n  width: 100%;\n  white-space: nowrap;\n  max-width: 18.75rem;\n  @media (min-width: 300px) and (max-width: 767px) {\n  }\n",
            ]))
        ),
        fr = E.a.img(
          ka ||
            (ka = Object(h.a)([
              "\n  width: 0.75rem;\n  cursor: pointer;\n  margin-left: 0.313rem;\n",
            ]))
        );
      function gr() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            Cr,
            null,
            r.a.createElement(
              Tr,
              null,
              r.a.createElement(
                zr,
                null,
                r.a.createElement(Rr, null, "Event Name"),
                r.a.createElement(
                  Sr,
                  null,
                  r.a.createElement(
                    "option",
                    { value: "filter" },
                    "Filter by event name"
                  )
                )
              ),
              r.a.createElement(
                zr,
                null,
                r.a.createElement(Rr, null, "Contract"),
                r.a.createElement(
                  Sr,
                  null,
                  r.a.createElement(
                    "option",
                    { value: "filter" },
                    "Filter by contract"
                  )
                )
              )
            ),
            r.a.createElement(
              Dr,
              null,
              r.a.createElement(
                Mr,
                null,
                r.a.createElement(Nr, null, "Transfer"),
                r.a.createElement(Rr, null, "App_Transactions_Validator"),
                r.a.createElement(
                  Fr,
                  null,
                  "{ ",
                  r.a.createElement("br", null),
                  '"From": xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c',
                  r.a.createElement("br", null),
                  '"to"',
                  r.a.createElement("br", null),
                  '"Value"',
                  r.a.createElement("br", null),
                  " }",
                  r.a.createElement("br", null),
                  r.a.createElement(
                    _r,
                    null,
                    r.a.createElement(
                      "option",
                      { value: "filter" },
                      "Select raw data and topics"
                    )
                  )
                )
              ),
              r.a.createElement(
                Mr,
                null,
                r.a.createElement(Nr, null, "Approval"),
                r.a.createElement(Rr, null, "App_Transactions_Validator"),
                r.a.createElement(
                  Fr,
                  null,
                  "{ ",
                  r.a.createElement("br", null),
                  '"From": xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c',
                  r.a.createElement("br", null),
                  '"to"',
                  r.a.createElement("br", null),
                  '"Value"',
                  r.a.createElement("br", null),
                  " }",
                  r.a.createElement("br", null),
                  r.a.createElement(
                    _r,
                    null,
                    r.a.createElement(
                      "option",
                      { value: "filter" },
                      "Select raw data and topicst"
                    )
                  )
                )
              )
            )
          )
        );
      }
      var xr,
        br,
        hr,
        Er,
        wr,
        vr,
        Ar,
        yr,
        jr,
        Or,
        kr,
        Cr = E.a.div(
          Ua ||
            (Ua = Object(h.a)([
              "\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0 20px 0;\n  background-color: white;\n",
            ]))
        ),
        Tr = E.a.div(
          Ha ||
            (Ha = Object(h.a)([
              "\n  display: flex;\n  width: 300px;\n  justify-content: space-between;\n  margin-left: 10px;\n",
            ]))
        ),
        zr = E.a.div(
          Wa ||
            (Wa = Object(h.a)([
              "\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n",
            ]))
        ),
        Sr = E.a.select(
          Ja ||
            (Ja = Object(h.a)([
              "\n  outline: none;\n  border: none;\n  background-color: #f5f6fd;\n  border-radius: 3px;\n  width: 260px;\n  padding: 0px 10px 0px 10px;\n  font-size: 12px;\n  height: 25px;\n  color: #a6aabf;\n",
            ]))
        ),
        Rr = E.a.div(
          Qa ||
            (Qa = Object(h.a)([
              "\n  font-size: 18px;\n  color: #102c78;\n  font-weight: 600;\n",
            ]))
        ),
        Dr = E.a.div(
          Ya ||
            (Ya = Object(h.a)([
              "\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        Nr = E.a.div(
          qa ||
            (qa = Object(h.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]))
        ),
        Mr = E.a.div(Za || (Za = Object(h.a)(["\n  margin-left: 20px;\n"]))),
        Fr = E.a.div(
          $a ||
            ($a = Object(h.a)([
              "\n  height: 170px;\n  background-color: #f5f6fd;\n  margin: 15px 15px 15px 0px;\n  padding: 15px;\n",
            ]))
        ),
        _r = E.a.select(
          er ||
            (er = Object(h.a)([
              "\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  width: 220px;\n  padding: 0px 10px 0px 10px;\n  font-size: 15px;\n  height: 25px;\n  color: #416be0;\n  background: transparent;\n",
            ]))
        );
      function Br() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            Ur,
            null,
            r.a.createElement(
              Yr,
              null,
              r.a.createElement(Jr, null, "Apps Transaction Validator"),
              r.a.createElement(
                Wr,
                null,
                "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
              )
            ),
            r.a.createElement(
              Hr,
              null,
              r.a.createElement(qr, null, "mapping (address = uint256)"),
              r.a.createElement(el, null, "Balances")
            ),
            [
              {
                transactionHash: "0x9c7f23cd689cbb9c6334e1aabacb09be8fd1e727",
                value1: "72668138000000000000",
                value2: "7",
              },
              {
                transactionHash: "0x9c7f23cd689cbb9c6334e1aabacb09be8fd1e727",
                value1: "72668138000000000000",
                value2: "757843390846995",
              },
              {
                transactionHash: "0x9c7f23cd689cbb9c6334e1aabacb09be8fd1e727",
                value1: "72668138000000000000",
                value2: "757843390846995",
              },
            ].map(function (e) {
              return r.a.createElement(
                nl,
                null,
                r.a.createElement(Qr, null, e.transactionHash),
                r.a.createElement($r, null, e.value1),
                r.a.createElement("img", {
                  style: { width: "10px" },
                  src:
                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0TDQ0SEg0NEhISDQ0NEhIPDQ8NDRUNFREXFxUVExUZHDQiGBslHhUYITEhJyouLi4uFyszODMsNystNSsBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAQACAwEAAAAAAAAAAAAACAcBAgMEBgX/xAA2EAACAQMCAwYEBAYDAQAAAAAAAQIDBBExQQUHIRITMkJRYSJTcYEGFDNSI0NykaHBJJKxFf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADr7AdQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM+wGQAAAAAAAAAAAAAy/mNzeoWNSdta04XFzDMakpt/l6U/2yx1nJbpNY9c5QGoAmRc7OP9vtd5a4znsflo9j6Zz2v8mncuObdC/qRt7mnC3upYUHGT/L1pekM9YS9ItvOzb6AaaAAAAAAAAAAAAAAAAAAAAAZQGUAAAAAAAAAAAA/G/GfFJWvC7+4h46VrVnDdd5jEW/u0RxUnKUnKTbbbk223JyfVtvdllfivhX5rh17bJpSrW1WnFvRVHH4G/bOCOLmhOnUnTnFxnCcqc4yWJRnF4kmvVNAeI7Rk0002mmmmnhprdM6gChuUPNFXKp2V7USuUlCjWk8KstozfzPfzfXXXCHoyaaabTTTTXRp+xQfKHmkrhU7K+qYuElChXk8KslpCb+Z6PzfXUNeAAAAAAAAAAAAAAAAAADAGAAAAAAAAAAAAAy7m3yxjexld2sYxvIxzOCxGNxFLR+lRLR76PZrUQBEFWlKMpRlGUZRk4yjJOMlJPDTT0aex0KS5tcsY30J3drGMbyMcyh0jG4ilo/SpjSW+j2anCtSlCUoSjKMoycJRlFxlGSeGmn1TT2A6HKbTTT6rr01ycACgeUPNLv+7sb6pivhQoV5PpW2VOo/mej8318WwkPG/coOaffd3Y31RKt8NO3uJy/V2VOo3/M9JebTXxBsYAAAAAAAAAAAAAAAGAMe4AAAAAAAAAAAAAABmPNrllC+hK6tYxjexj8UekYXEUtJbKolpLfR7NacAIgrUpwnKE4yjOMpQlGUXGcZp4akn1TT2OhSvNrllC/jK6tYxjewj8UekYXEEukZPRVEtJb6Pphxm6vRnCc4TjKM4SlCUZxcZxmnhxkn1TT6YA8YAA33k/zT73u7G/qfxulO3uJv9X0p1X+/ZS82j+LxbKQ6b3yf5p973Vjf1f4vSnb3E3+psqVVvz7KXm0fxeINnAAAAAAAAAAAAAMP1A6+wAAAAAAAAAAAAAAAAAGZ82eWUL+Erm1jGF7GPxLpGFxBLpGT0U/SX2fTDjpgAiG4oThOcJwlCcJShKM4uM4zTw1JPRp7HjKY5scs6d/B3NsowvYR66RhcRS6Rm9ppLCl9n0w4zZc29SnUnTnCUJwk4ThOLjOM08NST0YHiAAG9cn+afed1YX9X+J8NO3uJv9TZUqr/fspebR9fFtBDpWnKrjtS94LaVqrcqsVO3qSby5Tpy7Kk36tdlv3YH1wAAAAAAAAAAdQM+wAAAAAAAAAAAAAAAAAAHxvMj8f2/C7fy1LupF9zQztp3lTHVQT+7awt2g55j/AI9t+F2/Xs1LqpF9zQz9u3UxpBP++MLdqW+McUr3VzWuK9Rzq1Z9ucnhZeMJJbJJJJbJDjHFbi6uKtevVlUq1JdqUpf4SWyWiS6JHpAAAAKq5M8JqW/AbRVE4yqupdNPVRqSzD+8VF/czHlByudy6d7e02rZNTo0ZLDrvaU18v28301ob2AAAAAAAAAAABkDKAAAAAAAAAAAAAAAAPieZfMG34ZQ7K7NS8qQbo0c9IrTvKuNIJ7ayawt2g7cyuYFvwy3wuzUu6kX3NHPRLTvKuNIJ/eTWFu1LvF+KXFzcVa9erKpVqS7UpS1zsktktEl0SRxxXiVxc3FWvXqyqVaku1OctW//EkuiS6JLCPUAAAAa7yg5Wu5dO9vabVssTo0ZLDrvac18v0Xm+ni55QcrXcunfX1PFt0nQoSWHXe05r5fovN/T4qDSWEksJdOnRY9EAikkkkkksLHRJeiOQAAAAAAAAAAAAZQHQAAAAAAAAAAAAAPh+ZvMOhwyh2Y9ireVIt0qTeYxjp3lXGkfRayawt2gczeYVDhlDsx7NW8qQbo0W/hjHTvauNIJ6LWTWFu1L/ABTiNe4r1a9erOrVqSc5zm8yb/0lokuiSwhxPiFe4r1a1arKpVqSc5zm8ycv9JaJLoksI9UAAABr/KDla7ju76+p4t8qdChNda3pOovlei839Pi55QcrPzHd319T/wCP0nQoTX626qVF8v0Xm/p8VBJbLTQDhLZdEunTTHscgAAAAAAAAAAAAAADAGAAAAAAAAAAAAHocf4nG1srq5ksqhQq1saZcYtqK+rwvuRxxfiVe5ua1xWm51atSVScn6vZeiSwktkkit/x9w+pX4PxKlBNznaVexFaucV2lFfVrH3I8AAAAbFyg5Wd/wB1fX1P+B0nQt5x/W9KlRP+Xul5tfD4u/KDlZ33d31/TapdJ29vNY730qVV+z0j5tX08W+gPZAAAAAAAAAAAAAAAAAABj3YGPcAAAAAAAAAAAAMQ5k8mqtSvVuuHKD7yUqlS1lJU8VG8ydGT6Yb69l4xs8YS28ASKuXnHu32P8A5V5nOM93iH/fw/fJp3LfkzKnVhc8SVNuLUqdqpKpHtLR1pLo8ftWU93sbYAAAAAAAAAAAAAAAAAAAAAAB1A6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ9gM/UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADtAZADf7DcAA9hIABLQPQAAggACC3AALVjf7AANw9gADEtAAD0GwABCIABb/ULcABuNwAD2Ev9gAJBgAdQAB//9k=",
                  alt: "",
                }),
                r.a.createElement(Zr, null, e.value2)
              );
            })
          )
        );
      }
      var Lr,
        Ir,
        Pr,
        Xr,
        Vr,
        Gr,
        Kr,
        Ur = E.a.div(
          xr ||
            (xr = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 6px;\n  margin-top: 1.25rem;\n  height: 37.5rem;\n  padding: 1.25rem;\n",
            ]))
        ),
        Hr = E.a.div(
          br ||
            (br = Object(h.a)([
              "\n  display: flex;\n  width: 100%;\n  margin-top: 0.625rem;\n  max-width: 17.313rem;\n  align-items: center;\n  justify-content: space-between;\n",
            ]))
        ),
        Wr = E.a.div(
          hr ||
            (hr = Object(h.a)([
              "\n  font-size: 14px;\n  // font-weight: 600;\n  color: #191919;\n",
            ]))
        ),
        Jr = E.a.div(
          Er ||
            (Er = Object(h.a)([
              "\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 1.25rem;\n  color: #102c78;\n",
            ]))
        ),
        Qr = E.a.div(
          wr ||
            (wr = Object(h.a)([
              "\n  font-size: 0.875rem;\n  // font-weight: 600;\n  color: #191919;\n  margin-right: 0.813rem;\n",
            ]))
        ),
        Yr = E.a.div(
          vr ||
            (vr = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 4rem;\n  margin-bottom: 1.25rem;\n",
            ]))
        ),
        qr = E.a.div(
          Ar ||
            (Ar = Object(h.a)([
              "\n  background: #3163f11a 0% 0% no-repeat padding-box;\n  border: 1px solid #3163f0;\n  border-radius: 0.25rem;\n  padding: 0.313rem;\n  width: 100%;\n  max-width: 31.25rem;\n  white-space: nowrap;\n  font-size: 0.813rem;\n  font-weight: 600;\n  margin-right: 0.625rem;\n",
            ]))
        ),
        Zr = E.a.div(
          yr ||
            (yr = Object(h.a)([
              "\n  background: #effff1 0% 0% no-repeat padding-box;\n  border: 1px solid #1ace2f;\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1ace2f;\n  padding: 0.313rem;\n  width: 100%;\n  max-width: 31.25rem;\n  white-space: nowrap;\n  height: 1.563rem;\n  margin: 0.5rem;\n  margin-right: 0.5rem;\n  display: flex;\n  align-items: center;\n",
            ]))
        ),
        $r = E.a.div(
          jr ||
            (jr = Object(h.a)([
              "\n  background: #fde7e7 0% 0% no-repeat padding-box;\n  border: 1px solid #ce1a1a;\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #ce1a1a;\n  padding: 0.313rem;\n  width: 100%;\n  max-width: 31.25rem;\n  white-space: nowrap;\n  height: 1.563rem;\n  margin-right: 0.5rem;\n  display: flex;\n  align-items: center;\n}\n",
            ]))
        ),
        el = E.a.div(
          Or ||
            (Or = Object(h.a)([
              "\n  font-size: 1rem;\n  font-weight: 600;\n  color: #102c78;\n",
            ]))
        ),
        nl = E.a.div(
          kr ||
            (kr = Object(h.a)([
              "  \n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    max-width: 25.688rem;\n    margin-top: 0.625rem;\n    align-items: center;\n}",
            ]))
        );
      function tl() {
        var e = function () {
          x.push("/verified-contracts");
        };
        return r.a.createElement(
          zl,
          null,
          r.a.createElement(
            Rl,
            null,
            r.a.createElement(
              Sl,
              null,
              r.a.createElement(Dl, null, "App_Transactions_Validator"),
              r.a.createElement(Nl, null, "xdc02aaa39\u20268b3c"),
              r.a.createElement(
                Ml,
                null,
                r.a.createElement(
                  Fl,
                  { onClick: e },
                  r.a.createElement("img", {
                    style: { marginRight: "4px" },
                    alt: "",
                    src: "/images/Verified_tick.svg",
                  }),
                  "Verified Contracts"
                )
              )
            ),
            r.a.createElement(
              Sl,
              null,
              r.a.createElement(Dl, null, "App_Transactions_Validator"),
              r.a.createElement(Nl, null, "xdc02aaa39\u20268b3c"),
              r.a.createElement(
                Ml,
                null,
                r.a.createElement(
                  Fl,
                  { onClick: e },
                  r.a.createElement("img", {
                    style: { marginRight: "4px" },
                    alt: "",
                    src: "/images/Verified_tick.svg",
                  }),
                  "Verified Contracts"
                )
              )
            ),
            r.a.createElement(
              Sl,
              null,
              r.a.createElement(Dl, null, "App_Transactions_Validator"),
              r.a.createElement(Nl, null, "xdc02aaa39\u20268b3c"),
              r.a.createElement(
                Ml,
                null,
                r.a.createElement(
                  Fl,
                  { onClick: e },
                  r.a.createElement("img", {
                    style: { marginRight: "4px" },
                    alt: "",
                    src: "/images/Verified_tick.svg",
                  }),
                  "Verified Contracts"
                )
              )
            )
          )
        );
      }
      var al,
        rl,
        ll,
        il,
        ol,
        cl,
        dl,
        ml,
        sl,
        pl,
        ul,
        fl,
        gl,
        xl,
        bl,
        hl,
        El,
        wl,
        vl,
        Al,
        yl,
        jl,
        Ol,
        kl,
        Cl,
        Tl,
        zl = E.a.div(
          Lr ||
            (Lr = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 22.813rem;\n  background-color: #ffffff;\n  border-radius: 0.25rem;\n  padding: 1.438rem;\n  margin-top: 1.25rem;\n",
            ]))
        ),
        Sl = E.a.div(
          Ir ||
            (Ir = Object(h.a)([
              "\n  padding: 10px;\n  width: 1.625rem,\n  height: 13.5rem,       \n  background: #F5F6FD;\n  border: solid #D5E0FF;\n  outline: none;\n  background: #F5F6FD 0% 0% no-repeat padding-box;\n  border: 1px solid #D5E0FF;\n  border-radius: 6px;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n          \n",
            ]))
        ),
        Rl = E.a.div(
          Pr ||
            (Pr = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  max-width: 38.625rem;\n  width: 100%;\n  height: 6.5rem;\n",
            ]))
        ),
        Dl = E.a.div(
          Xr ||
            (Xr = Object(h.a)([
              "\n  font-size: 0.875rem;\n  // font-weight: 600;\n  color: #1d3c93;\n  margin-bottom: 0.313rem;\n",
            ]))
        ),
        Nl = E.a.div(
          Vr ||
            (Vr = Object(h.a)([
              "\n  font-size: 0.875rem;\n  color: #191919;\n  margin-bottom: 0.313rem;\n",
            ]))
        ),
        Ml = E.a.div(Gr || (Gr = Object(h.a)(["\n  height: 22px;\n"]))),
        Fl = E.a.button(
          Kr ||
            (Kr = Object(h.a)([
              "\n  background: #00a58c 0% 0% no-repeat padding-box;\n  border-radius: 0.188rem;\n  border: none;\n  padding: 0.288rem;\n  width: 10.438rem\n  height: 2px;\n  text-align: center;\n  font-size: 0.75rem;\n  color: #ffffff;\n",
            ]))
        );
      function _l() {
        var e = r.a.useState("Overview"),
          n = Object(z.a)(e, 2),
          t = n[0],
          a = n[1],
          l = function (e) {
            a(e.target.id);
          };
        return r.a.createElement(
          li,
          null,
          r.a.createElement(
            S.Row,
            { style: { display: "flex", justifyContent: "space-between" } },
            r.a.createElement(
              ql,
              null,
              r.a.createElement("img", {
                alt: "",
                style: { marginRight: "0.425rem", cursor: "pointer" },
                src: "/images/back.svg",
                onClick: function () {
                  x.push("/dashboard/transaction-list");
                },
              }),
              r.a.createElement(Zl, null, "Transactions Details")
            ),
            r.a.createElement(mi, null, "View in Explorer")
          ),
          r.a.createElement(
            si,
            null,
            r.a.createElement(
              ui,
              { style: { paddingTop: "0.625rem", paddingLeft: "1.25rem" } },
              "Txn hash"
            ),
            r.a.createElement(
              "div",
              {
                style: {
                  paddingLeft: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                },
              },
              r.a.createElement(
                pi,
                null,
                "xdcabfe4184e5f9f600fe86d20ffdse2fsfbsgsgsa768b3c"
              ),
              r.a.createElement(
                be.CopyToClipboard,
                null,
                r.a.createElement(fi, { src: "/images/copy.svg" })
              ),
              r.a.createElement(vi, null, "Fail"),
              r.a.createElement(
                Ai,
                null,
                " ",
                r.a.createElement("img", {
                  alt: "",
                  style: {
                    width: "15px",
                    cursor: "pointer",
                    marginRight: "6px",
                  },
                  src: "/images/addalert.svg",
                }),
                "Add Alert"
              )
            ),
            r.a.createElement(
              hi,
              null,
              r.a.createElement(
                Ei,
                {
                  id: "Overview",
                  onClick: l,
                  style: {
                    color: "Overview" === t ? "#3163F0" : "#AEB7D0",
                    display: "flex",
                    paddingBottom: "0.875rem",
                    borderBottom:
                      "Overview" === t ? "0.225rem solid #3163F0" : "#AEB7D0",
                  },
                },
                r.a.createElement("img", {
                  alt: "",
                  style: { marginRight: "0.375rem" },
                  src:
                    "Overview" === t
                      ? "/images/overview.svg"
                      : "/images/overview_grey.svg",
                }),
                "Overview"
              ),
              r.a.createElement(
                Ei,
                {
                  id: "Contracts",
                  onClick: l,
                  style: {
                    color: "Contracts" === t ? "#3163F0" : "#AEB7D0",
                    display: "flex",
                    paddingBottom: "0.875rem",
                    borderBottom:
                      "Contracts" === t ? "0.225rem solid #3163F0" : "",
                  },
                },
                r.a.createElement("img", {
                  alt: "",
                  style: { marginRight: "0.375rem" },
                  src:
                    "Contracts" === t
                      ? "/images/Contract_blue.svg"
                      : "/images/contract_grey.svg",
                }),
                "Contracts"
              ),
              r.a.createElement(
                Ei,
                {
                  id: "Events",
                  onClick: l,
                  style: {
                    color: "Events" === t ? "#3163F0" : "#AEB7D0",
                    display: "flex",
                    paddingBottom: "0.875rem",
                    borderBottom:
                      "Events" === t ? "0.225rem solid #3163F0" : "",
                  },
                },
                r.a.createElement("img", {
                  alt: "",
                  style: { marginRight: "0.375rem" },
                  src:
                    "Events" === t
                      ? "/images/event_blue.svg"
                      : "/images/event_grey.svg",
                }),
                " ",
                "Events ",
                r.a.createElement(wi, { src: "/images/tool-tip.svg" })
              ),
              r.a.createElement(
                Ei,
                {
                  id: "StateChange",
                  onClick: l,
                  style: {
                    color: "StateChange" === t ? "#3163F0" : "#AEB7D0",
                    borderBottom:
                      "StateChange" === t ? "0.225rem solid #3163F0" : "",
                  },
                },
                r.a.createElement("img", {
                  alt: "",
                  style: { marginRight: "0.375rem", marginBottom: "4px" },
                  src:
                    "StateChange" === t
                      ? "/images/statechange_blue.svg"
                      : "/images/statechange_grey.svg",
                }),
                "State changes",
                r.a.createElement(wi, { src: "/images/tool-tip.svg" })
              )
            ),
            "Overview" === t &&
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  ti,
                  null,
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Network"),
                      r.a.createElement(ei, null, "XDC mainnet")
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Error"),
                      r.a.createElement(ei, null, "Out of Gas")
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Block"),
                      r.a.createElement(ei, null, "365474(2456block)")
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Transactions index"),
                      r.a.createElement(ei, null, "5")
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "From"),
                      r.a.createElement(
                        ei,
                        { style: { display: "flex", alignItems: "center" } },
                        r.a.createElement(
                          pi,
                          null,
                          r.a.createElement(
                            oi,
                            null,
                            "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                          )
                        ),
                        r.a.createElement(fi, { src: "/images/copy.svg" })
                      )
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "To"),
                      r.a.createElement(
                        ei,
                        { style: { display: "flex", alignItems: "center" } },
                        r.a.createElement(
                          pi,
                          null,
                          r.a.createElement(
                            oi,
                            null,
                            "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                          )
                        ),
                        r.a.createElement(fi, { src: "/images/copy.svg" })
                      )
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Timestamp"),
                      r.a.createElement(ei, null, "213 322 adhfb")
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Value"),
                      r.a.createElement(ei, null, " 10 XDC")
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Nonce"),
                      r.a.createElement(ei, null, "453")
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Gas Used"),
                      r.a.createElement(ei, null, "60,500(100%)")
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Gas Price"),
                      r.a.createElement(
                        ei,
                        null,
                        "72462568294732962 XDC(54253.gwel)"
                      )
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Transaction Fee"),
                      r.a.createElement(ei, null, "0.2372723762728 XDC")
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Raw input"),
                      r.a.createElement(
                        ei,
                        { style: { display: "flex", alignItems: "center" } },
                        r.a.createElement(
                          pi,
                          null,
                          r.a.createElement(
                            oi,
                            null,
                            "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                          )
                        ),
                        r.a.createElement(fi, { src: "/images/copy.svg" })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  $l,
                  null,
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Function:"),
                      r.a.createElement(gi, null, "transfer()")
                    )
                  ),
                  r.a.createElement(
                    ni,
                    null,
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(ii, null, "Input"),
                      r.a.createElement(gi, null, "view data ")
                    )
                  ),
                  r.a.createElement(
                    ci,
                    null,
                    r.a.createElement(
                      S.Row,
                      {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                        },
                      },
                      r.a.createElement(
                        di,
                        null,
                        "Caller Address:",
                        r.a.createElement("br", null),
                        "462482482765"
                      ),
                      r.a.createElement(
                        di,
                        null,
                        "Contract Address:",
                        r.a.createElement("br", null),
                        "4752589752"
                      )
                    )
                  )
                ),
                r.a.createElement("b", null, "Stack Trace"),
                r.a.createElement(
                  ai,
                  null,
                  r.a.createElement(xi, null, "Error Messege:out of gas"),
                  "balances[_to] = balances[_to].add(_value);",
                  r.a.createElement("br", null),
                  "at App_Transactions_Validator.sol in App_Transactions_Validator"
                ),
                r.a.createElement(
                  ri,
                  null,
                  r.a.createElement(bi, { placeholder: "Execution trace" }),
                  r.a.createElement("br", null),
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/contracts.svg",
                    style: { width: "1rem" },
                  }),
                  "transfer in App_Transactions_Validator"
                )
              ),
            "Contracts" === t && r.a.createElement(tl, null),
            "Events" === t && r.a.createElement(gr, null),
            "StateChange" === t && r.a.createElement(Br, null)
          )
        );
      }
      var Bl,
        Ll,
        Il,
        Pl,
        Xl,
        Vl,
        Gl,
        Kl,
        Ul,
        Hl,
        Wl,
        Jl,
        Ql,
        Yl,
        ql = E.a.div(
          al ||
            (al = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 267px;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 600;\n",
            ]))
        ),
        Zl = E.a.div(rl || (rl = Object(h.a)([""]))),
        $l = E.a.div(
          ll ||
            (ll = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  display: flex;\n  border-radius: 0.375rem;\n  opacity: 1;\n  margin-top: 1.25rem;\n  height: auto;\n",
            ]))
        ),
        ei = E.a.div(il || (il = Object(h.a)(["\n  font-size: 0.75rem;\n"]))),
        ni = E.a.div(
          ol ||
            (ol = Object(h.a)([
              "\n  border-bottom: 0.031rem #c9d1cb solid;\n  padding: 0.813rem;\n",
            ]))
        ),
        ti = E.a.div(
          cl ||
            (cl = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.375rem;\n  opacity: 1;\n  margin-top: 1.25rem;\n  height: auto;\n",
            ]))
        ),
        ai = E.a.div(
          dl ||
            (dl = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.375rem;\n  padding: 1.875rem;\n  margin-top: 1.25rem;\n  height: 9.375rem;\n",
            ]))
        ),
        ri = E.a.div(
          ml ||
            (ml = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.375rem;\n  margin-top: 1.25rem;\n  height: 18.75rem;\n  padding: 2rem;\n",
            ]))
        ),
        li = E.a.div(
          sl ||
            (sl = Object(h.a)([
              "\n  background: #ecf0f7 0% 0% no-repeat padding-box;\n  width: 100%;\n  padding: 3.125rem;\n  display: 100%;\n  overflow-x: scroll;\n  height: 100vh;\n",
            ]))
        ),
        ii = E.a.div(
          pl ||
            (pl = Object(h.a)([
              "\n  text-align: left;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #102c78;\n  width: 100%;\n  max-width: 16.25rem;\n",
            ]))
        ),
        oi = E.a.b(
          ul ||
            (ul = Object(h.a)([
              "\n  color: #416be0;\n  display: flex;\n  width: 100%;\n",
            ]))
        ),
        ci = E.a.div(
          fl ||
            (fl = Object(h.a)([
              "\n  text-align: left;\n  padding: 0.625rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #102c78;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 21rem;\n",
            ]))
        ),
        di = E.a.div(
          gl ||
            (gl = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  max-width: 21rem;\n",
            ]))
        ),
        mi = E.a.button(
          xl ||
            (xl = Object(h.a)([
              '\n  background-image: url("/images/globe.svg");\n  background-repeat: no-repeat;\n  background-position: 0.5rem;\n  padding-left: 1.75rem;\n  background-size: 0.875rem;\n  position: relative;\n  background-color: #ffffff;\n  color: #3163f0;\n  border: none;\n  border-radius: 0.25rem;\n  // width: 100%;\n  max-width: 17.75rem;\n  white-space: nowrap;\n  height: 2.125rem;\n  font-size: 0.875rem;\n  width: 100%;\n',
            ]))
        ),
        si = E.a.div(
          bl ||
            (bl = Object(h.a)([
              "\n  background-color: #ffffff;\n  border-radius: 0.375rem;\n  width: 100%;\n  height: 8.75rem;\n  margin-top: 1.25rem;\n  width: 100%;\n",
            ]))
        ),
        pi = E.a.div(
          hl ||
            (hl = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  margin-top: 0.625rem;\n  // font-weight: 600;\n  border: none;\n  width: 100%;\n  max-width: 24.063rem;\n",
            ]))
        ),
        ui = E.a.div(
          El ||
            (El = Object(h.a)([
              "\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #102c78;\n",
            ]))
        ),
        fi = E.a.img(
          wl ||
            (wl = Object(h.a)(["\n  margin-left: 4%;\n  cursor: pointer;\n"]))
        ),
        gi = E.a.div(vl || (vl = Object(h.a)(["\n  color: #416be0;\n"]))),
        xi = E.a.div(
          Al ||
            (Al = Object(h.a)([
              "\n  text-align: left;\n  letter-spacing: 0rem;\n  color: #ce1a1a;\n  opacity: 1;\n",
            ]))
        ),
        bi = E.a.input(
          yl ||
            (yl = Object(h.a)([
              '\n  height: 2.188rem;\n  width: 12.5rem;\n  border: none;\n  margin-left: 0.938rem;\n  border-radius: 0.25rem;\n  background-image: url("/images/search-icon.svg");\n  background-repeat: no-repeat;\n  background-position: 0.5rem;\n  padding-left: 1.875rem;\n  background-size: 0.75rem;\n  position: relative;\n  &:focus: {\n    outline: none;\n    border: none;\n  }\n',
            ]))
        ),
        hi = E.a.div(
          jl ||
            (jl = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 39.125rem;\n  margin: 1.563rem 0rem 0.625rem 1.063rem;\n  cursor: pointer;\n",
            ]))
        ),
        Ei = E.a.div(
          Ol ||
            (Ol = Object(h.a)([
              "\n  padding: 0.313rem 0.5rem 0.313rem 0.5rem;\n  displat: flex;\n",
            ]))
        ),
        wi = E.a.img(
          kl ||
            (kl = Object(h.a)([
              "\n  width: 0.75rem;\n  cursor: pointer;\n  margin-left: 0.513rem;\n",
            ]))
        ),
        vi = E.a.div(
          Cl ||
            (Cl = Object(h.a)([
              "\n  color: #ce1a1a;\n  padding: 14px;\n  width: 100%;\n  margin-left: 1rem;\n  display: flex;\n  align-items: center;\n  top: 202px;\n  left: 939px;\n  width: 69px;\n  height: 25px;\n  background: #fde7e7 0% 0% no-repeat padding-box;\n  border: 1px solid #fda6a6;\n  border-radius: 4px;\n  opacity: 1;\n",
            ]))
        ),
        Ai = E.a.div(
          Tl ||
            (Tl = Object(h.a)([
              "\n  top: 202px;\n  left: 1016px;\n  width: 100px;\n  height: 27px;\n  font-size: 14px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #3163f0;\n  border-radius: 4px;\n  opacity: 1;\n  color: #3163f0;\n  margin-left: 20px;\n  padding-top: 2px;\n  padding-left: 8px;\n",
            ]))
        );
      Object(Ee.a)(function () {
        return {
          dialogBox: {
            width: "100% !important",
            maxWidth: "700px !important",
            overflow: "hidden",
            top: "-9%",
          },
        };
      });
      E.a.img(
        Bl ||
          (Bl = Object(h.a)([
            "\n  cursor: pointer;\n  width: 16px;\n  transition: width 0.1s;\n  &:hover {\n    width: 18px;\n    box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);\n    -webkit-box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);\n    -moz-box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);\n  }\n",
          ]))
      ),
        E.a.div(
          Ll ||
            (Ll = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        E.a.div(
          Il ||
            (Il = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 6px;\n  width: 100%;\n  background-color: #ffffff;\n  padding: 20px 30px 20px 30px;\n  height: 473px;\n",
            ]))
        ),
        E.a.div(
          Pl ||
            (Pl = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        ),
        E.a.div(
          Xl ||
            (Xl = Object(h.a)([
              "\n  font: normal normal 600 24px/29px Inter;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #303134;\n",
            ]))
        ),
        E.a.div(
          Vl ||
            (Vl = Object(h.a)([
              "\n  color: #102c78;\n  margin-top: 10px;\n  font-size: 1rem;\n  font-weight: 600;\n",
            ]))
        ),
        E.a.button(
          Gl ||
            (Gl = Object(h.a)([
              "\n  background: #3163f0 0% 0% no-repeat padding-box;\n  border-radius: 4px;\n  border: 0px;\n  color: #ffffff;\n  width: 100%;\n  font-size: 1rem;\n  font-weight: 600;\n  padding: 7px;\n  margin-top: 40px;\n  cursor: pointer;\n  max-width: 230px;\n  margin-top: 20px;\n",
            ]))
        ),
        E.a.div(
          Kl ||
            (Kl = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n",
            ]))
        ),
        E.a.div(
          Ul ||
            (Ul = Object(h.a)([
              "\n  background: #f5f6fd 0% 0% no-repeat padding-box;\n  border: 1px solid #d5e0ff;\n  border-radius: 6px;\n  width: 100%;\n\n  max-width: 192px;\n  padding: 10px;\n  color: #1d3c93;\n  font-weight: 600;\n  cursor: pointer;\n  height: 230px;\n",
            ]))
        ),
        E.a.img(Hl || (Hl = Object(h.a)(["\n  width: 90px;\n"]))),
        E.a.span(
          Wl ||
            (Wl = Object(h.a)([
              "\n  text-align: center;\n  font-size: 0.75rem;\n  font: normal normal medium 14px/17px Inter;\n  color: #303134;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  margin-top: 20px;\n",
            ]))
        ),
        E.a.div(
          Jl ||
            (Jl = Object(h.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n",
            ]))
        ),
        E.a.div(
          Ql ||
            (Ql = Object(h.a)([
              "\n  font-size: 1rem;\n  font-weight: 600;\n  color: #303134;\n",
            ]))
        ),
        E.a.div(
          Yl ||
            (Yl = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  color: #102c78;\n",
            ]))
        );
      var yi,
        ji,
        Oi,
        ki,
        Ci,
        Ti,
        zi,
        Si = Object(Ee.a)(function () {
          return { dialogBox: { width: "100% !important" } };
        });
      function Ri(e) {
        var n = Si();
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            he.a,
            { classes: { paper: n.dialogBox }, open: !0 },
            r.a.createElement(
              Qi,
              null,
              r.a.createElement(
                Yi,
                null,
                r.a.createElement(
                  qi,
                  { style: { padding: "15px 12px 10px 10px" } },
                  r.a.createElement(Zi, null, "Settings"),
                  r.a.createElement("img", {
                    style: { cursor: "pointer" },
                    alt: "",
                    src: "/images/XDC-Cross.svg",
                    onClick: e.click,
                  })
                ),
                r.a.createElement(
                  $i,
                  { style: { padding: "15px 12px 10px 10px" } },
                  "Configure Columns"
                ),
                r.a.createElement(
                  eo,
                  null,
                  "Change the layout of the transactions list and display only the columns and information that is most important to you."
                ),
                r.a.createElement(
                  qi,
                  {
                    style: {
                      borderBottom: "1px solid #d5e0ff",
                      padding: "15px 12px 10px 10px",
                    },
                  },
                  r.a.createElement(no, null, "Transaction Hash"),
                  r.a.createElement(
                    "label",
                    { class: "switch" },
                    r.a.createElement("input", { type: "checkbox" }),
                    r.a.createElement("span", { class: "slider round" })
                  )
                ),
                r.a.createElement(
                  qi,
                  {
                    style: {
                      borderBottom: "1px solid #d5e0ff",
                      padding: "5px 12px 10px 10px",
                    },
                  },
                  r.a.createElement(no, null, "Status"),
                  r.a.createElement(
                    "label",
                    { class: "switch" },
                    r.a.createElement("input", { type: "checkbox" }),
                    r.a.createElement("span", { class: "slider round" })
                  )
                ),
                r.a.createElement(
                  qi,
                  {
                    style: {
                      borderBottom: "1px solid #d5e0ff",
                      padding: "5px 12px 10px 10px",
                    },
                  },
                  r.a.createElement(no, null, "Function"),
                  r.a.createElement(
                    "label",
                    { class: "switch" },
                    r.a.createElement("input", { type: "checkbox" }),
                    r.a.createElement("span", { class: "slider round" })
                  )
                ),
                r.a.createElement(
                  qi,
                  {
                    style: {
                      borderBottom: "1px solid #d5e0ff",
                      padding: "5px 12px 10px 10px",
                    },
                  },
                  r.a.createElement(no, null, "Contracts"),
                  r.a.createElement(
                    "label",
                    { class: "switch" },
                    r.a.createElement("input", { type: "checkbox" }),
                    r.a.createElement("span", { class: "slider round" })
                  )
                ),
                r.a.createElement(
                  qi,
                  {
                    style: {
                      borderBottom: "1px solid #d5e0ff",
                      padding: "5px 12px 10px 10px",
                    },
                  },
                  r.a.createElement(no, null, "From"),
                  r.a.createElement(
                    "label",
                    { class: "switch" },
                    r.a.createElement("input", { type: "checkbox" }),
                    r.a.createElement("span", { class: "slider round" })
                  )
                ),
                r.a.createElement(
                  qi,
                  {
                    style: {
                      borderBottom: "1px solid #d5e0ff",
                      padding: "5px 12px 10px 10px",
                    },
                  },
                  r.a.createElement(no, null, "Network"),
                  r.a.createElement(
                    "label",
                    { class: "switch" },
                    r.a.createElement("input", { type: "checkbox" }),
                    r.a.createElement("span", { class: "slider round" })
                  )
                ),
                r.a.createElement(
                  qi,
                  {
                    style: {
                      borderBottom: "1px solid #d5e0ff",
                      padding: "5px 12px 10px 10px",
                    },
                  },
                  r.a.createElement(no, null, "XDC value"),
                  r.a.createElement(
                    "label",
                    { class: "switch" },
                    r.a.createElement("input", { type: "checkbox" }),
                    r.a.createElement("span", { class: "slider round" })
                  )
                )
              )
            )
          )
        );
      }
      var Di,
        Ni,
        Mi,
        Fi,
        _i,
        Bi,
        Li,
        Ii,
        Pi,
        Xi,
        Vi,
        Gi,
        Ki,
        Ui,
        Hi,
        Wi,
        Ji,
        Qi = E.a.div(
          yi ||
            (yi = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        Yi = E.a.div(
          ji ||
            (ji = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n\n  border-radius: 0.375rem;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 43.75rem;\n  height: auto;\n",
            ]))
        ),
        qi = E.a.div(
          Oi ||
            (Oi = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-left: 9px;\n  margin-right: 5px;\n",
            ]))
        ),
        Zi = E.a.div(
          ki ||
            (ki = Object(h.a)([
              "\n  // font: normal normal 600 24px/29px Inter;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #303134;\n  margin-left: 1.5px;\n",
            ]))
        ),
        $i = E.a.div(
          Ci ||
            (Ci = Object(h.a)([
              "\n  font-size: 1rem;\n  font-weight: 600;\n  color: #102c78;\n  border-bottom: 1px solid rgb(213, 224, 255);\n  margin-left: 9px;\n",
            ]))
        ),
        eo = E.a.div(
          Ti ||
            (Ti = Object(h.a)([
              "\n  font-size: 1rem;\n  font-weight: 600;\n  color: #303134;\n  margin-top: 0.625rem;\n  padding: 15px 12px 8px 10px;\n  margin-left: 9px;\n",
            ]))
        ),
        no = E.a.div(
          zi ||
            (zi = Object(h.a)([
              "\n  text-align: left;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #303134;\n  margin-top: 1.25rem;\n",
            ]))
        );
      Object(Ee.a)(function () {
        return { dialogBox: { width: "100% !important" } };
      });
      E.a.div(
        Di ||
          (Di = Object(h.a)([
            "\n  width: 68px;\n  height: 34px;\n  background: #3163f0 0% 0% no-repeat padding-box;\n  border-radius: 3px;\n  color: #ffffff;\n  padding-top: 6px;\n  font-size: 14px;\n  margin-right: 15px;\n  text-align: center;\n  cursor: pointer;\n",
          ]))
      ),
        E.a.div(
          Ni ||
            (Ni = Object(h.a)([
              "\n  top: 432px;\n  left: 1179px;\n  width: 72px;\n  height: 34px;\n  border: 1px solid #3163f0;\n  opacity: 1;\n  padding-top: 6px;\n  border-radius: 3px;\n  font-size: 14px;\n  text-align: center;\n  cursor: pointer;\n  margin-left: -5px;\n  margin-right: -11px;\n\n  color: #3163f0;\n",
            ]))
        ),
        E.a.div(
          Mi ||
            (Mi = Object(h.a)([
              "\n  width: 38px;\n  height: 34px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #3163f0;\n  border-radius: 6px;\n  padding-top: 4px;\n  margin-right: 20px;\n  text-align: center;\n  color: #3062ef;\n  text-size: 14px;\n  cursor: pointer;\n",
            ]))
        ),
        E.a.div(
          Fi ||
            (Fi = Object(h.a)([
              "\n  width: 78px;\n  text-size: 14px;\n  height: 34px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n  opacity: 1;\n  padding-top: 4px;\n  margin-right: 20px;\n  text-align: center;\n  cursor: pointer;\n",
            ]))
        ),
        E.a.div(
          _i ||
            (_i = Object(h.a)([
              "\n  width: 78px;\n  height: 34px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n  opacity: 1;\n  padding-top: 4px;\n  text-align: center;\n  text-size: 14px;\n  cursor: pointer;\n",
            ]))
        ),
        E.a.div(
          Bi ||
            (Bi = Object(h.a)([
              "\n  background: #f5f6fd 0% 0% no-repeat padding-box;\n  border: 1px solid #d5e0ff;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  // color: #767c93;\n  color: #b7b7b7;\n  height: 40px;\n  padding: 10px;\n  width: 352px;\n  height: 34px;\n  padding-top: 5px;\n  position: relative;\n",
            ]))
        ),
        E.a.div(
          Li ||
            (Li = Object(h.a)([
              "\n  background: #f5f6fd 0% 0% no-repeat padding-box;\n  border: 1px solid #d5e0ff;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #b7b7b7;\n  height: 34px;\n  padding-left: 9px;\n  padding-top: 6px;\n\n  width: 160px;\n\n  margin-right: 50px;\n",
            ]))
        ),
        E.a.div(
          Ii ||
            (Ii = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 30px;\n",
            ]))
        ),
        E.a.div(
          Pi ||
            (Pi = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  padding-bottom: 20px;\n  border-radius: 0.375rem;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 563px;\n  height: 359px;\n",
            ]))
        ),
        E.a.div(
          Xi ||
            (Xi = Object(h.a)([
              "\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #303134;\n  padding-top: 15px;\n  padding-bottom: 40px;\n  margin-left: -12px;\n",
            ]))
        ),
        E.a.div(
          Vi ||
            (Vi = Object(h.a)([
              "\n  font-size: 1rem;\n  font-weight: 600;\n  color: #303134;\n  margin-top: 0.625rem;\n  //   padding: 15px 12px 8px 10px;\n  // padding: 0.938rem 0.75rem 0.5rem 0.625rem;\n",
            ]))
        ),
        E.a.div(
          Gi ||
            (Gi = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 400px;\n  padding-bottom: 10px;\n",
            ]))
        ),
        E.a.div(
          Ki ||
            (Ki = Object(h.a)([
              "\n  display: flex;\n  justify-content: start;\n  width: 100%;\n  max-width: 400px;\n",
            ]))
        ),
        E.a.div(
          Ui || (Ui = Object(h.a)(["\n  padding: 18px 14px 12px 12px;\n"]))
        ),
        E.a.div(
          Hi ||
            (Hi = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 3 00px;\n  padding-bottom: 20px;\n",
            ]))
        ),
        E.a.div(
          Wi ||
            (Wi = Object(h.a)([
              "\n  display: flex;\n  justify-content: end;\n  /* width: 100%; */\n  max-width: 503px;\n",
            ]))
        ),
        E.a.div(
          Ji ||
            (Ji = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 515px;\n  padding-bottom: 20px;\n",
            ]))
        );
      var to,
        ao,
        ro,
        lo,
        io,
        oo,
        co,
        mo,
        so,
        po,
        uo,
        fo,
        go,
        xo,
        bo,
        ho,
        Eo,
        wo,
        vo,
        Ao,
        yo,
        jo = t(689),
        Oo = t(682);
      function ko(e) {
        Object(a.useEffect)(function () {}, []);
        var n = Object(a.useState)(!0),
          t = Object(z.a)(n, 2),
          l = (t[0], t[1], Object(a.useState)(!1)),
          i = Object(z.a)(l, 2),
          o = i[0],
          c = i[1];
        r.a.useEffect(function () {
          p(
            [
              {
                txn: "0xcad1b93a\u2026f617",
                status: "Success",
                function: "Transfer",
                contracts: "App_Transactions",
                from: "0x63Ac0CA1\u2026f617",
                to: "0x63Ac0CA1\u2026f617",
                when: "2 minutes ago",
              },
              {
                txn: "0x1822a4c5\u20262ca8",
                status: "Success",
                function: "Transfer",
                contracts: "App_Transactions",
                from: "0x63Ac0CA1\u2026f617",
                to: "0x63Ac0CA1\u2026f617",
                when: "2 minutes ago",
              },
              {
                txn: "0x1822a4c5\u20262ca8",
                status: "Success",
                function: "Transfer",
                contracts: "App_Transactions",
                from: "0x63Ac0CA1\u2026f617",
                to: "0x63Ac0CA1\u2026f617",
                when: "2 minutes ago",
              },
            ].map(function (e) {
              return {
                txn: e.txn,
                status: e.status,
                function: e.function,
                contracts: e.contracts,
                from: e.from,
                to: e.to,
                when: e.when,
              };
            })
          );
        }, []);
        var d = r.a.useState([]),
          m = Object(z.a)(d, 2),
          s = m[0],
          p = m[1],
          u = r.a.useState(!1),
          f = Object(z.a)(u, 2),
          g = f[0],
          b = f[1],
          h = function () {
            x.push("/dashboard/transaction-details");
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            Bo,
            null,
            r.a.createElement(Xo, null, "Transactions"),
            r.a.createElement(
              Lo,
              null,
              r.a.createElement(
                Io,
                null,
                r.a.createElement(Po, null, "Transactions"),
                r.a.createElement(Vo, {
                  placeholder: "Search by status or name",
                })
              ),
              r.a.createElement(
                Ko,
                null,
                o &&
                  r.a.createElement(Ri, {
                    click: function () {
                      c(!1);
                    },
                  }),
                r.a.createElement(Go, {
                  src: "/images/settings.svg",
                  onClick: function () {
                    c(!0);
                  },
                }),
                r.a.createElement(Go, { src: "/images/refresh.svg" }),
                r.a.createElement(Go, { src: "/images/filter.svg" })
              )
            ),
            r.a.createElement(
              Wo,
              null,
              r.a.createElement(
                S.Column,
                null,
                r.a.createElement(Uo, null, "View Transaction for Contract"),
                r.a.createElement(
                  Ho,
                  null,
                  "You can view transactions per contract by using the contract picker below"
                ),
                r.a.createElement(
                  Oo.a,
                  {
                    onClickAway: function () {
                      b(!1);
                    },
                  },
                  r.a.createElement(
                    jo.a,
                    { sx: { position: "relative" } },
                    r.a.createElement(
                      Qo,
                      {
                        onClick: function () {
                          b(function (e) {
                            return !e;
                          });
                        },
                      },
                      "App_Transactions_Validator",
                      " ",
                      r.a.createElement("img", {
                        style: { marginLeft: "0.5rem" },
                        alt: "",
                        src: "/images/XDCmainnet.svg",
                      }),
                      r.a.createElement("br", null),
                      r.a.createElement(
                        Yo,
                        null,
                        "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                      ),
                      r.a.createElement(qo, { src: "/images/Arrrow.svg" })
                    ),
                    g
                      ? r.a.createElement(
                          jo.a,
                          {
                            sx: {
                              position: "absolute",
                              top: 77,
                              right: 0,
                              left: 0,
                              zIndex: 1,
                              p: 1,
                              bgcolor: "background.paper",
                              width: "100%",
                              maxWidth: "453px",
                              background: "#f5f6fd 0% 0% no-repeat padding-box",
                              border: "1px solid #d5e0ff",
                              borderRadius: "6px",
                              height: "80px",
                              marginTop: "4px",
                              fontSize: "0.875rem",
                              fontWeight: "600",
                              color: "#191919",
                            },
                          },
                          r.a.createElement(Zo, null, "Contract"),
                          "App_Transactions_Validator",
                          r.a.createElement("br", null),
                          r.a.createElement(
                            Yo,
                            null,
                            "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                          )
                        )
                      : null
                  )
                )
              )
            ),
            r.a.createElement(
              _o,
              null,
              r.a.createElement(
                Mo,
                null,
                r.a.createElement(
                  S.Row,
                  null,
                  r.a.createElement(Fo, null, "Tx Hash"),
                  r.a.createElement(Fo, null, "Status"),
                  " ",
                  r.a.createElement(
                    Fo,
                    null,
                    "Function",
                    r.a.createElement(
                      Ga.a,
                      { disableFocusListener: !0, title: "Add" },
                      r.a.createElement($o, { src: "/images/tool-tip.svg" })
                    )
                  ),
                  r.a.createElement(Fo, null, "Contracts"),
                  r.a.createElement(Fo, null, "Form"),
                  r.a.createElement(Fo, null, "To"),
                  r.a.createElement(Fo, null, "When")
                )
              ),
              r.a.createElement(
                "div",
                null,
                s.map(function (e, n) {
                  return r.a.createElement(
                    Mo,
                    { onClick: h },
                    r.a.createElement(
                      S.Row,
                      null,
                      r.a.createElement(Jo, null, e.txn),
                      r.a.createElement(Jo, null, e.status),
                      r.a.createElement(Jo, null, e.function),
                      r.a.createElement(Jo, null, e.contracts),
                      r.a.createElement(Jo, null, e.from),
                      r.a.createElement(Jo, null, e.to),
                      r.a.createElement(Jo, null, e.when)
                    )
                  );
                })
              )
            )
          ),
          r.a.createElement("div", null, !1)
        );
      }
      var Co,
        To,
        zo,
        So,
        Ro,
        Do,
        No,
        Mo = E.a.div(
          to ||
            (to = Object(h.a)([
              "\n  padding: 0.75rem;\n  border-bottom: 1px solid #e3e7eb;\n  \n    // max-width: 200px;\n  }\n",
            ]))
        ),
        Fo = E.a.div(
          ao ||
            (ao = Object(h.a)([
              "\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #102c78;\n  width: 100%;\n  max-width: 18.75rem;\n  white-space: nowrap;\n  @media (min-width: 300px) and (max-width: 767px) {\n   \n    margin-right: 59px;\n    width: 100%;\n",
            ]))
        ),
        _o = E.a.div(
          ro ||
            (ro = Object(h.a)([
              "\n  background-color: #ffffff;\n  border-radius: 0.375rem;\n  width: 100%;\n  height: 25rem;\n  padding: 0.625rem;\n  margin-top: 1.563rem;\n   @media (min-width: 300px) and (max-width: 767px) {\n   \n\n  \n overflow: scroll;\n    width: 100%;\n    height: 381px;\n    overflow-y: auto;\n    position: relative;\n    &::-webkit-scrollbar {\n        width: 10px;\n        border: 0.5px solid blue;\n        outline:none;\n    }\n    \n\n    width: 100%;\n",
            ]))
        ),
        Bo = E.a.div(
          lo ||
            (lo = Object(h.a)([
              "\n  background: #ecf0f7 0% 0% no-repeat padding-box;\n  opacity: 1;\n  width: 100%;\n  padding: 3.125rem;\n  height: 120vh;\n  @media (min-width: 340px) and (max-width: 768px) {\n    padding: 3.125rem 1.5rem 1.5rem 1.5rem;\n  }\n",
            ]))
        ),
        Lo = E.a.div(
          io ||
            (io = Object(h.a)([
              "\n  width: 100%;\n  max-width: 1540px;\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        ),
        Io = E.a.div(
          oo ||
            (oo = Object(h.a)([
              "\ndisplay:flex;\n@media (min-width: 340px) and (max-width: 768px) {\n    margin-left: -3px;\n    padding: 2px;\n        \n",
            ]))
        ),
        Po = E.a.div(
          co ||
            (co = Object(h.a)([
              "\n  font-size: 1.25rem;\n  font-weight: 600;\n  @media (min-width: 360px) and (max-width: 577px) {\n   display:none;\n    \n",
            ]))
        ),
        Xo = E.a.div(
          mo ||
            (mo = Object(h.a)([
              "\n  display: none;\n  @media (min-width: 360px) and (max-width: 577px) {\n    font-size: 1rem;\n    padding-bottom: 10px;\n    font-weight: 600;\n    display: flex;\n  }\n",
            ]))
        ),
        Vo = E.a.input(
          so ||
            (so = Object(h.a)([
              '\n  height: 2.188rem;\n  border: none;\n  margin-left: 0.938rem;\n  border-radius: 0.25rem;\n  background-image: url("/images/search-icon.svg");\n  background-repeat: no-repeat;\n  background-position: 0.5rem;\n  padding-left: 1.875rem;\n  background-size: 0.75rem;\n  outline: none;\n  width: 100%;\n  max-width: 261px;\n\n  *:focus {\n    outline: none;\n  }\n   @media (min-width: 300px) and (max-width: 767px) {\n    display:flex;\n        margin-left: -1px;\n    margin-right: 8px;\n    padding: 5px;\n    font-size: 14px;\n    background-image:none;\n\n',
            ]))
        ),
        Go = E.a.img(
          po ||
            (po = Object(h.a)([
              "\n  // margin-right: 0.625rem;\n  cursor: pointer;\n",
            ]))
        ),
        Ko = E.a.div(uo || (uo = Object(h.a)(["\n  display: flex;\n"]))),
        Uo = E.a.span(
          fo ||
            (fo = Object(h.a)([
              "\n  margin-top: 0.625rem;\n  color: #102c78;\n  font-size: 1rem;\n  font-weight: 600;\n",
            ]))
        ),
        Ho = E.a.span(
          go ||
            (go = Object(h.a)([
              "\n  margin-top: 0.625rem;\n  color: #191919;\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin-bottom: 0.625rem;\n",
            ]))
        ),
        Wo = E.a.div(
          xo ||
            (xo = Object(h.a)([
              "\n  margin-top: 1.25rem;\n  background-color: #ffffff;\n  border-radius: 0.25rem;\n  padding: 0.625rem;\n",
            ]))
        ),
        Jo = E.a.div(
          bo ||
            (bo = Object(h.a)([
              "\n  font-size: 0.875rem;\n  font-weight: 300;\n  color: #191919;\n  width: 100%;\n  max-width: 300px;\n",
            ]))
        ),
        Qo =
          (E.a.b(
            ho ||
              (ho = Object(h.a)([
                "\n  color: #191919;\n  font-size: 1.5rem;\n  font-weight: 600;\n",
              ]))
          ),
          E.a.div(
            Eo ||
              (Eo = Object(h.a)([
                "\n  background: #f5f6fd 0% 0% no-repeat padding-box;\n  border: 1px solid #d5e0ff;\n  border-radius: 6px;\n  font: normal normal medium 14px/17px Inter;\n  font-size: 14px;\n  font-weight: 600;\n  color: #191919;\n  height: 75px;\n  padding: 10px;\n  width: 100%;\n  max-width: 453px;\n  position: relative;\n",
              ]))
          )),
        Yo = E.a.div(
          wo ||
            (wo = Object(h.a)([
              "\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #416be0;\n  margin-top: 0.25rem;\n  width:100%;\n   @media (min-width: 300px) and (max-width: 767px) {\n     font-size: 0.575rem;\n",
            ]))
        ),
        qo = E.a.img(
          vo ||
            (vo = Object(h.a)([
              "\n  width: 0.75rem;\n  position: absolute;\n  top: 29px;\n  right: 8px;\n  cursor: pointer;\n",
            ]))
        ),
        Zo = E.a.div(
          Ao ||
            (Ao = Object(h.a)([
              "\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #767c93;\n",
            ]))
        ),
        $o = E.a.img(
          yo ||
            (yo = Object(h.a)([
              "\n  width: 0.75rem;\n  cursor: pointer;\n  margin-left: 0.5rem;\n",
            ]))
        ),
        ec = Object(Ee.a)(function () {
          return { dialogBox: { width: "100% !important" } };
        });
      function nc(e) {
        var n = ec();
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            he.a,
            { classes: { paper: n.dialogBox }, open: !0 },
            r.a.createElement(
              gc,
              null,
              r.a.createElement(
                xc,
                null,
                r.a.createElement(
                  bc,
                  null,
                  r.a.createElement(hc, null, "Add Network"),
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/XDC-Cross.svg",
                    onClick: e.click,
                  })
                ),
                r.a.createElement(uc, null, "Network name"),
                r.a.createElement(fc, { type: "text", placeholder: "Name" }),
                r.a.createElement(uc, null, "New RPC URL"),
                r.a.createElement(fc, { type: "text", placeholder: "URL" }),
                r.a.createElement(uc, null, "Chain ID"),
                r.a.createElement(fc, { type: "text", placeholder: "ID" }),
                r.a.createElement(uc, null, "Currency symbol (optional)"),
                r.a.createElement(fc, { type: "text", placeholder: "Symbol" }),
                r.a.createElement(uc, null, "Block explorer (optional)"),
                r.a.createElement(fc, {
                  type: "text",
                  placeholder: "Explorer",
                }),
                r.a.createElement(Ec, null, "Add network")
              )
            )
          )
        );
      }
      var tc,
        ac,
        rc,
        lc,
        ic,
        oc,
        cc,
        dc,
        mc,
        sc,
        pc,
        uc = E.a.div(
          Co ||
            (Co = Object(h.a)([
              "\n  font-size: 1rem;\n  font-weight: 600;\n  color: #303134;\n  margin-top: 1.25rem;\n",
            ]))
        ),
        fc = E.a.input(
          To ||
            (To = Object(h.a)([
              "\n  background: #f0f2fc 0% 0% no-repeat padding-box;\n  border-radius: 0.25rem;\n  border: none;\n  color: #767c93;\n  padding: 0.313;\n  width: 100%;\n  margin-top: 1.25rem;\n",
            ]))
        ),
        gc = E.a.div(
          zo ||
            (zo = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
            ]))
        ),
        xc = E.a.div(
          So ||
            (So = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.375rem;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 43.75rem;\n  height: auto;\n  padding: 1.25rem;\n",
            ]))
        ),
        bc = E.a.div(
          Ro ||
            (Ro = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n",
            ]))
        ),
        hc = E.a.div(
          Do ||
            (Do = Object(h.a)([
              "\n  // font: normal normal 600 24px/29px Inter;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #303134;\n",
            ]))
        ),
        Ec = E.a.button(
          No ||
            (No = Object(h.a)([
              "\n  text-align: left;\n  // font: normal normal medium 16px/20px Inter;\n  font-size: 1rem;\n  font-weight: 600;\n  background: #9db5f8 0% 0% no-repeat padding-box;\n  border-radius: 0.25rem;\n  color: #ffffff;\n  margin-top: 1.25rem;\n  border: 0;\n",
            ]))
        );
      function wc(e) {
        var n = Object(a.useState)(!1),
          t = Object(z.a)(n, 2),
          l = t[0],
          i = t[1];
        r.a.useEffect(function () {
          m(
            [
              {
                network: "App_Transactions_Validator",
                url: "https://explorer.xinfin.network/",
              },
            ].map(function (e) {
              return { network: e.network, url: e.url };
            })
          );
        }, []);
        var o = r.a.useState([]),
          c = Object(z.a)(o, 2),
          d = c[0],
          m = c[1];
        return r.a.createElement(
          Ic,
          null,
          r.a.createElement(
            Pc,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(Xc, null, "Networks")
            ),
            r.a.createElement(
              "div",
              { style: { display: "flex" } },
              l &&
                r.a.createElement(nc, {
                  click: function () {
                    i(!1);
                  },
                }),
              r.a.createElement(
                Gc,
                {
                  onClick: function () {
                    i(!0);
                  },
                },
                "Add Network"
              )
            )
          ),
          r.a.createElement(
            Kc,
            null,
            r.a.createElement(
              Uc,
              null,
              r.a.createElement(
                S.Row,
                null,
                r.a.createElement(Hc, null, "Network"),
                r.a.createElement(Vc, null, "URL")
              )
            ),
            r.a.createElement(
              "div",
              null,
              d.map(function (e, n) {
                return r.a.createElement(
                  Uc,
                  null,
                  r.a.createElement(
                    S.Row,
                    { style: { alignItems: "center" } },
                    r.a.createElement(Wc, { src: "/images/mainnet.svg" }),
                    r.a.createElement(Qc, null, "Mainnet"),
                    r.a.createElement(
                      Jc,
                      null,
                      "https://explorer.xinfin.network/"
                    )
                  )
                );
              })
            )
          )
        );
      }
      var vc,
        Ac,
        yc,
        jc,
        Oc,
        kc,
        Cc,
        Tc,
        zc,
        Sc,
        Rc,
        Dc,
        Nc,
        Mc,
        Fc,
        _c,
        Bc,
        Lc,
        Ic = E.a.div(
          tc ||
            (tc = Object(h.a)([
              "\n  background-color: #ecf0f7;\n  width: 100%;\n  padding: 3.125rem;\n  height: 100vh;\n",
            ]))
        ),
        Pc = E.a.div(
          ac ||
            (ac = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  height: 3.125rem;\n  align-items: center;\n",
            ]))
        ),
        Xc = E.a.span(
          rc ||
            (rc = Object(h.a)([
              "\n  // font: normal normal 600 24px/29px Inter;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #191919;\n  margin-right: 0.625rem;\n",
            ]))
        ),
        Vc = E.a.div(
          lc ||
            (lc = Object(h.a)([
              "\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #102c78;\n  width: 100%;\n  max-width: 15.625rem;\n  white-space: nowrap;\n  @media (min-width: 300px) and (max-width: 767px) {\n    max-width: 7.625rem;\n    width: 100%;\n    margin-left: 18px;\n  }\n",
            ]))
        ),
        Gc = E.a.button(
          ic ||
            (ic = Object(h.a)([
              '\n  background-image: url("/images/Add.svg");\n  background-repeat: no-repeat;\n  background-position: 0.5rem;\n  padding-left: 1.313rem;\n  background-size: 0.875rem;\n  position: relative;\n  background-color: #3163f0;\n  color: #ffffff;\n  border: none;\n  border-radius: 0.25rem;\n  width: 8.125rem;\n  height: 2.188rem;\n  font-size: 0.875rem;\n  @media (min-width: 300px) and (max-width: 768px) {\n    width: 6.125rem;\n    height: 2rem;\n    font-size: 0.675rem;\n  }\n',
            ]))
        ),
        Kc = E.a.div(
          oc ||
            (oc = Object(h.a)([
              "\n  background-color: #ffffff;\n  border-radius: 0.375rem;\n  width: 100%;\n  height: 25rem;\n  margin-top: 1.25rem;\n  padding: 0.625rem;\n\n  @media (min-width: 300px) and (max-width: 768px) {\n    height: 400px;\n    overflow: scroll;\n    // width: 100%;\n    // max-width: 200px;\n  }\n",
            ]))
        ),
        Uc = E.a.div(
          cc ||
            (cc = Object(h.a)([
              "\n  padding: 0.938rem;\n  border-bottom: 0.063rem solid #e3e7eb;\n",
            ]))
        ),
        Hc = E.a.div(
          dc ||
            (dc = Object(h.a)([
              "\n  // display: flex;\n  // flex-flow: column nowrap;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #102c78;\n  width: 100%;\n  max-width: 15.625rem;\n  white-space: nowrap;\n",
            ]))
        ),
        Wc = E.a.img(
          mc ||
            (mc = Object(h.a)([
              "\n  width: 1.75rem;\n  margin-right: 0.625rem;\n",
            ]))
        ),
        Jc = E.a.div(
          sc ||
            (sc = Object(h.a)([
              "\n  font-size: 0.875rem;\n  color: #416be0;\n  width: 100%;\n  max-width: 15.625rem;\n  @media (min-width: 300px) and (max-width: 767px) {\n    max-width: 7.625rem;\n    width: 100%;\n  }\n",
            ]))
        ),
        Qc = E.a.div(
          pc ||
            (pc = Object(h.a)([
              "\n  color: #191919;\n  font-size: 0.875rem;\n  font-weight: 600;\n  width: 100%;\n  max-width: 13.438rem;\n  white-space: nowrap;\n  @media (min-width: 300px) and (max-width: 768px) {\n    margin-right: 22px;\n  }\n",
            ]))
        ),
        Yc = t(219),
        qc = t(352),
        Zc = t(12),
        $c = t(229),
        ed = t.n($c),
        nd = [
          {
            id: "japan",
            color: "hsl(194, 70%, 50%)",
            data: [
              { x: "plane", y: 165 },
              { x: "helicopter", y: 76 },
              { x: "boat", y: 184 },
              { x: "train", y: 99 },
              { x: "subway", y: 195 },
              { x: "bus", y: 140 },
              { x: "car", y: 31 },
              { x: "moto", y: 43 },
              { x: "bicycle", y: 198 },
              { x: "horse", y: 293 },
              { x: "skateboard", y: 8 },
              { x: "others", y: 279 },
            ],
          },
        ],
        td = function (e) {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              { className: "Tooltip-graph" },
              r.a.createElement(
                "p",
                { className: "Tooltip-graph-date" },
                e.point.data.x
              ),
              r.a.createElement(
                "p",
                { className: "Tooltip-graph-tx" },
                "Accounts: ",
                e.point.data.y
              )
            )
          );
        },
        ad = {
          margin: { top: 5, right: 0, bottom: 0, left: 0 },
          curve: "monotoneX",
          axisTop: null,
          axisRight: null,
          axisBottom: null,
          axisLeft: null,
          enableGridX: !1,
          enableGridY: !0,
          enableSlices: !1,
          enablePoints: !1,
          enableArea: !0,
          areaOpacity: 0.9,
          useMesh: !0,
          animate: !0,
        },
        rd = function (e) {
          e.data;
          var n = e.MouseMovePoint,
            t = e.CustomPoint;
          return r.a.createElement(
            qc.a,
            Object.assign({}, ad, {
              data: nd,
              tooltip: td,
              layers: [
                "grid",
                "markers",
                "axes",
                "areas",
                "lines",
                "points",
                "slices",
                "mesh",
                "legends",
                t,
              ],
              xScale: { type: "point" },
              defs: [
                Object(Zc.o)("gradientA", [
                  { offset: 0, color: "inherit" },
                  { offset: 100, color: "inherit", opacity: 0 },
                ]),
              ],
              fill: [{ match: "*", id: "gradientA" }],
              yScale: {
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: !0,
                reverse: !1,
              },
              yFormat: " >-.2f",
              colors: [["#3163F0"]],
              pointSize: 10,
              legends: [],
              onMouseMove: n,
            })
          );
        },
        ld = E.a.div(
          vc ||
            (vc = Object(h.a)([
              "\n  height: 8.75rem;\n  width: auto;\n  margin-top: 3.19rem;\n\n  @media (max-width: 767px) {\n    height: 80px;\n  }\n",
            ]))
        );
      function id() {
        var e = Object(a.useState)({ x: 0, y: 0 }),
          n = Object(z.a)(e, 2),
          t = n[0],
          l = n[1],
          i = Object(a.useState)([]),
          o = Object(z.a)(i, 1)[0],
          c = Object(a.useState)([]),
          d = Object(z.a)(c, 1)[0],
          m = d.length,
          s = 0 === d.length ? "" : ed()(d[m - 1].day).format("D MMM"),
          p = 0 === d.length ? "" : ed()(d[0].day).format("D MMM");
        return r.a.createElement(
          ld,
          null,
          r.a.createElement(rd, {
            MouseMovePoint: function (e) {
              var n = e.x,
                a = e.y;
              l(Object(Yc.a)(Object(Yc.a)({}, t), {}, { x: n, y: a }));
            },
            data: o,
            CustomPoint: function () {
              return r.a.createElement(
                "g",
                null,
                r.a.createElement("circle", {
                  fill: "#3763dd",
                  r: 2,
                  strokeWidth: 1,
                  stroke: 2,
                  cx: t.x,
                  cy: t.y,
                })
              );
            },
          }),
          r.a.createElement(
            "div",
            { className: "dates" },
            r.a.createElement("p", null, s),
            r.a.createElement("p", null, p)
          )
        );
      }
      function od(e) {
        var n = r.a.useState(!1),
          t = Object(z.a)(n, 2),
          a = t[0],
          l = t[1];
        return r.a.createElement(
          "div",
          { style: { overflow: "auto" } },
          r.a.createElement(
            S.Column,
            null,
            r.a.createElement(
              S.Row,
              null,
              r.a.createElement(
                bd,
                null,
                r.a.createElement(
                  Ed,
                  null,
                  r.a.createElement(hd, null, "Analytics"),
                  r.a.createElement(Dd, { src: "/images/refresh.svg" })
                ),
                r.a.createElement(
                  wd,
                  null,
                  r.a.createElement(vd, null, "View analytics for contract"),
                  r.a.createElement(
                    Ad,
                    null,
                    "You can view analytics data per contract by using the contract picker below."
                  ),
                  r.a.createElement(
                    Oo.a,
                    {
                      onClickAway: function () {
                        l(!1);
                      },
                    },
                    r.a.createElement(
                      jo.a,
                      { sx: { position: "relative" } },
                      r.a.createElement(
                        Td,
                        {
                          onClick: function () {
                            l(function (e) {
                              return !e;
                            });
                          },
                        },
                        "App_Transactions_Validator",
                        " ",
                        r.a.createElement("img", {
                          style: { marginLeft: "0.5rem" },
                          alt: "",
                          src: "/images/XDCmainnet.svg",
                        }),
                        r.a.createElement("br", null),
                        r.a.createElement(
                          zd,
                          null,
                          "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                        ),
                        r.a.createElement(Sd, { src: "/images/Arrrow.svg" })
                      ),
                      a
                        ? r.a.createElement(
                            jo.a,
                            {
                              sx: {
                                position: "absolute",
                                top: 77,
                                right: 0,
                                left: 0,
                                zIndex: 1,
                                p: 1,
                                bgcolor: "background.paper",
                                width: "100%",
                                maxWidth: "453px",
                                background:
                                  "#f5f6fd 0% 0% no-repeat padding-box",
                                border: "1px solid #d5e0ff",
                                borderRadius: "6px",
                                height: "5rem",
                                marginTop: "4px",
                                fontSize: "0.875rem",
                                fontWeight: "600",
                                color: "#191919",
                              },
                            },
                            r.a.createElement(Rd, null, "Contract"),
                            "App_Transactions_Validator",
                            r.a.createElement("br", null),
                            r.a.createElement(
                              zd,
                              null,
                              "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                            )
                          )
                        : null
                    )
                  )
                ),
                r.a.createElement(
                  xd,
                  null,
                  r.a.createElement(
                    yd,
                    null,
                    r.a.createElement(
                      Ed,
                      null,
                      r.a.createElement(
                        "div",
                        { style: { display: "flex", alignItems: "center" } },
                        r.a.createElement(jd, null, "Transactions over time"),
                        r.a.createElement(Dd, {
                          src: "/images/expand.svg",
                          onClick: function () {
                            return e.changeExpand(1);
                          },
                        })
                      ),
                      r.a.createElement(
                        "select",
                        { id: "cars", className: "select" },
                        r.a.createElement(
                          "option",
                          { value: "volvo", className: "select-dropdown" },
                          "Last 5 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "saab", className: "select-dropdown" },
                          "Last 7 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "mercedes", className: "select-dropdown" },
                          "Last 15 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "audi", className: "select-dropdown" },
                          "Last 25 days"
                        )
                      )
                    ),
                    r.a.createElement(id, null)
                  ),
                  r.a.createElement(
                    yd,
                    null,
                    r.a.createElement(
                      Ed,
                      null,
                      r.a.createElement(
                        "div",
                        { style: { display: "flex", alignItems: "center" } },
                        r.a.createElement(jd, null, "Gas used overtime"),
                        r.a.createElement(Dd, {
                          src: "/images/expand.svg",
                          onClick: function () {
                            return e.changeExpand(2);
                          },
                        })
                      ),
                      r.a.createElement(
                        "select",
                        { id: "cars", className: "select" },
                        r.a.createElement(
                          "option",
                          { value: "volvo", className: "select-dropdown" },
                          "Last 5 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "saab", className: "select-dropdown" },
                          "Last 7 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "mercedes", className: "select-dropdown" },
                          "Last 15 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "audi", className: "select-dropdown" },
                          "Last 25 days"
                        )
                      )
                    ),
                    r.a.createElement(id, null)
                  )
                ),
                r.a.createElement(
                  xd,
                  null,
                  r.a.createElement(
                    yd,
                    null,
                    r.a.createElement(
                      Ed,
                      null,
                      r.a.createElement(
                        "div",
                        { style: { display: "flex", alignItems: "center" } },
                        r.a.createElement(jd, null, "Top Callers"),
                        r.a.createElement(Dd, {
                          src: "/images/expand.svg",
                          onClick: function () {
                            return e.changeExpand(4);
                          },
                        })
                      ),
                      r.a.createElement(
                        "select",
                        { id: "cars", className: "select" },
                        r.a.createElement(
                          "option",
                          { value: "volvo", className: "select-dropdown" },
                          "Last 5 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "saab", className: "select-dropdown" },
                          "Last 7 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "mercedes", className: "select-dropdown" },
                          "Last 15 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "audi", className: "select-dropdown" },
                          "Last 25 days"
                        )
                      )
                    ),
                    r.a.createElement(
                      Cd,
                      null,
                      r.a.createElement(Od, null, "Contract from"),
                      r.a.createElement(
                        kd,
                        null,
                        "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                      )
                    ),
                    r.a.createElement(
                      Cd,
                      null,
                      r.a.createElement(Od, null, "Network"),
                      r.a.createElement(kd, null, "Mainnet")
                    ),
                    r.a.createElement(
                      Cd,
                      null,
                      r.a.createElement(Od, null, "Contract from"),
                      r.a.createElement(
                        kd,
                        null,
                        "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                      )
                    ),
                    r.a.createElement(
                      Cd,
                      null,
                      r.a.createElement(Od, null, "Network"),
                      r.a.createElement(kd, null, "Mainnet")
                    ),
                    r.a.createElement(
                      Cd,
                      null,
                      r.a.createElement(Od, null, "Network"),
                      r.a.createElement(kd, null, "Mainnet")
                    )
                  ),
                  r.a.createElement(
                    yd,
                    null,
                    r.a.createElement(
                      Ed,
                      null,
                      r.a.createElement(
                        "div",
                        { style: { display: "flex", alignItems: "center" } },
                        r.a.createElement(jd, null, "Active users"),
                        r.a.createElement(Dd, {
                          src: "/images/expand.svg",
                          onClick: function () {
                            return e.changeExpand(3);
                          },
                        })
                      ),
                      r.a.createElement(
                        "select",
                        { id: "cars", className: "select" },
                        r.a.createElement(
                          "option",
                          { value: "volvo", className: "select-dropdown" },
                          "Last 5 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "saab", className: "select-dropdown" },
                          "Last 7 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "mercedes", className: "select-dropdown" },
                          "Last 15 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "audi", className: "select-dropdown" },
                          "Last 25 days"
                        )
                      )
                    ),
                    r.a.createElement(id, null)
                  )
                ),
                r.a.createElement(
                  yd,
                  null,
                  r.a.createElement(
                    Ed,
                    null,
                    r.a.createElement(
                      "div",
                      { style: { display: "flex", alignItems: "center" } },
                      r.a.createElement(jd, null, "Top Functions calls"),
                      r.a.createElement(Dd, {
                        src: "/images/expand.svg",
                        onClick: function () {
                          return e.changeExpand(5);
                        },
                      })
                    ),
                    r.a.createElement(
                      "select",
                      { id: "cars", className: "select" },
                      r.a.createElement(
                        "option",
                        { value: "volvo", className: "select-dropdown" },
                        "Last 5 days"
                      ),
                      r.a.createElement(
                        "option",
                        { value: "saab", className: "select-dropdown" },
                        "Last 7 days"
                      ),
                      r.a.createElement(
                        "option",
                        { value: "mercedes", className: "select-dropdown" },
                        "Last 15 days"
                      ),
                      r.a.createElement(
                        "option",
                        { value: "audi", className: "select-dropdown" },
                        "Last 25 days"
                      )
                    )
                  ),
                  r.a.createElement(
                    Cd,
                    null,
                    r.a.createElement(Od, null, "Contract from"),
                    r.a.createElement(
                      kd,
                      null,
                      "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                    )
                  ),
                  r.a.createElement(
                    Cd,
                    null,
                    r.a.createElement(Od, null, "Network"),
                    r.a.createElement(kd, null, "Mainnet")
                  ),
                  r.a.createElement(
                    Cd,
                    null,
                    r.a.createElement(Od, null, "Contract from"),
                    r.a.createElement(
                      kd,
                      null,
                      "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                    )
                  ),
                  r.a.createElement(
                    Cd,
                    null,
                    r.a.createElement(Od, null, "Network"),
                    r.a.createElement(kd, null, "Mainnet")
                  ),
                  r.a.createElement(
                    Cd,
                    null,
                    r.a.createElement(Od, null, "Network"),
                    r.a.createElement(kd, null, "Mainnet")
                  )
                )
              )
            )
          )
        );
      }
      var cd,
        dd,
        md,
        sd,
        pd,
        ud,
        fd,
        gd,
        xd = E.a.div(
          Ac ||
            (Ac = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  width: 100%;\n  justify-content: space-between;\n  @media (min-width: 300px) and (max-width: 1024px) {\n    display: block;\n  }\n",
            ]))
        ),
        bd = E.a.div(
          yc ||
            (yc = Object(h.a)([
              "\n  width: 100%;\n  padding: 25px 20px 0px 25px;\n  background-color: #ecf0f7;\n  @media (min-width: 300px) and (max-width: 1024px) {\n    padding: 12px 15px 0px 15px;\n  }\n",
            ]))
        ),
        hd = E.a.div(
          jc ||
            (jc = Object(h.a)([
              "\n  text-align: left;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #191919;\n  @media (min-width: 300px) and (max-width: 767px) {\n    font-size: 1.2rem;\n  }\n",
            ]))
        ),
        Ed = E.a.div(
          Oc ||
            (Oc = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1.25rem;\n",
            ]))
        ),
        wd = E.a.div(
          kc ||
            (kc = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.375rem;\n  width: 100%;\n  height: auto;\n  margin-top: 0.625rem;\n  padding: 1.25rem;\n  @media (min-width: 300px) and (max-width: 1024px) {\n    width: 100%;\n    padding: 9px 12px 9px 12px;\n  }\n",
            ]))
        ),
        vd = E.a.div(
          Cc ||
            (Cc = Object(h.a)([
              "\n  font-size: 1rem;\n  font-weight: 600;\n  color: #102c78;\n  @media (min-width: 300px) and (max-width: 767px) {\n    font-size: 0.85rem;\n  }\n",
            ]))
        ),
        Ad = E.a.div(
          Tc ||
            (Tc = Object(h.a)([
              "\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: #191919;\n  margin-top: 0.625rem;\n  padding-bottom: 1.25rem;\n  @media (min-width: 300px) and (max-width: 767px) {\n    font-size: 0.85rem;\n  }\n",
            ]))
        ),
        yd = E.a.div(
          zc ||
            (zc = Object(h.a)([
              "\n  width: 49%;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.375rem;\n  height: auto;\n  padding: 1.25rem;\n  margin-top: 2.32rem;\n  @media (min-width: 300px) and (max-width: 1024px) {\n    width: 100%;\n  }\n",
            ]))
        ),
        jd = E.a.div(
          Sc ||
            (Sc = Object(h.a)([
              "\n  font-size: 1rem;\n  font-weight: 600;\n  color: #102c78;\n  margin-right: 0.625rem;\n  white-space: nowrap;\n  @media (min-width: 300px) and (max-width: 767px) {\n    font-size: 0.85rem;\n  }\n",
            ]))
        ),
        Od = E.a.div(
          Rc ||
            (Rc = Object(h.a)([
              "\n  width: 100%;\n  max-width: 9.375rem;\n  color: #102c78;\n\n  @media (min-width: 300px) and (max-width: 767px) {\n    word-break: break-all;\n  }\n",
            ]))
        ),
        kd = E.a.div(
          Dc ||
            (Dc = Object(h.a)([
              "\n  width: 100%;\n  max-width: 9.375rem;\n  @media (min-width: 300px) and (max-width: 767px) {\n    word-break: break-all;\n  }\n",
            ]))
        ),
        Cd = E.a.div(
          Nc ||
            (Nc = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  border-top: 1px solid rgb(227, 231, 235);\n  margin-top: 1.25rem;\n",
            ]))
        ),
        Td = E.a.div(
          Mc ||
            (Mc = Object(h.a)([
              "\n  background: #f5f6fd 0% 0% no-repeat padding-box;\n  border: 1px solid #d5e0ff;\n  border-radius: 0.375rem;\n  font: normal normal medium 14px/17px Inter;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #191919;\n  height: 4.688rem;\n  padding: 0.625rem;\n  width: 100%;\n  max-width: 453px;\n  position: relative;\n  @media (min-width: 300px) and (max-width: 767px) {\n    font-size: 0.85rem;\n  }\n",
            ]))
        ),
        zd = E.a.div(
          Fc ||
            (Fc = Object(h.a)([
              "\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #416be0;\n  margin-top: 4px;\n  @media (min-width: 300px) and (max-width: 767px) {\n    font-size: 0.85rem;\n    word-break: break-all;\n  }\n",
            ]))
        ),
        Sd = E.a.img(
          _c ||
            (_c = Object(h.a)([
              "\n  width: 0.75rem;\n  position: absolute;\n  cursor: pointer;\n  top: 1.813rem;\n  right: 0.5rem;\n",
            ]))
        ),
        Rd = E.a.div(
          Bc ||
            (Bc = Object(h.a)([
              "\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #767c93;\n  @media (min-width: 300px) and (max-width: 767px) {\n    font-size: 0.85rem;\n  }\n",
            ]))
        ),
        Dd = E.a.img(
          Lc ||
            (Lc = Object(h.a)([
              "\n  cursor: pointer;\n  @media (min-width: 300px) and (max-width: 1024px) {\n    display: none;\n  }\n",
            ]))
        );
      function Nd(e) {
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            S.Column,
            null,
            r.a.createElement(
              S.Row,
              null,
              r.a.createElement(
                Ud,
                null,
                r.a.createElement(
                  Wd,
                  null,
                  r.a.createElement(
                    Yd,
                    null,
                    r.a.createElement("img", {
                      alt: "",
                      src: "/images/back.svg",
                      onClick: function () {
                        e.changeExpand(0);
                      },
                    }),
                    r.a.createElement(Hd, null, e.graphName)
                  ),
                  r.a.createElement(
                    Yd,
                    null,
                    r.a.createElement(Qd, null, "Expand"),
                    r.a.createElement(Zd, { src: "/images/refresh.svg" })
                  )
                ),
                r.a.createElement(
                  S.Row,
                  { style: { width: "100%", justifyContent: "space-between" } },
                  r.a.createElement(
                    Jd,
                    null,
                    r.a.createElement(
                      qd,
                      null,
                      r.a.createElement(
                        "select",
                        { id: "cars", className: "select" },
                        r.a.createElement(
                          "option",
                          { value: "volvo", className: "select-dropdown" },
                          "Last 5 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "saab", className: "select-dropdown" },
                          "Last 7 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "mercedes", className: "select-dropdown" },
                          "Last 15 days"
                        ),
                        r.a.createElement(
                          "option",
                          { value: "audi", className: "select-dropdown" },
                          "Last 25 days"
                        )
                      )
                    ),
                    r.a.createElement(id, null)
                  )
                )
              )
            )
          )
        );
      }
      var Md,
        Fd,
        _d,
        Bd,
        Ld,
        Id,
        Pd,
        Xd,
        Vd,
        Gd,
        Kd,
        Ud = E.a.div(
          cd ||
            (cd = Object(h.a)([
              "\n  width: 100%;\n  padding: 50px;\n  background-color: #ecf0f7;\n",
            ]))
        ),
        Hd = E.a.div(
          dd ||
            (dd = Object(h.a)([
              "\n  text-align: left;\n  font: normal normal 600 24px/29px Inter;\n  letter-spacing: 0px;\n  color: #191919;\n",
            ]))
        ),
        Wd = E.a.div(
          md ||
            (md = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n",
            ]))
        ),
        Jd = E.a.div(
          sd ||
            (sd = Object(h.a)([
              "\n  width: 100%;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 6px;\n  height: auto;\n  margin-top: 20px;\n  padding: 20px;\n",
            ]))
        ),
        Qd = E.a.button(
          pd ||
            (pd = Object(h.a)([
              '\n  background-image: url("/images/Export.svg");\n  background-repeat: no-repeat;\n  background-position: 8px;\n  padding-left: 26px;\n  background-size: 14px;\n  position: relative;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  width: 100%;\n  color: #3163f0;\n  height: 34px;\n  font-size: 1rem;\n  font-weight: 600;\n',
            ]))
        ),
        Yd = E.a.div(
          ud ||
            (ud = Object(h.a)(["\n  display: flex;\n  align-items: center;\n"]))
        ),
        qd = E.a.div(
          fd ||
            (fd = Object(h.a)([
              "\n  display: flex;\n  justify-content: flex-end;\n",
            ]))
        ),
        Zd = E.a.img(
          gd ||
            (gd = Object(h.a)(["\n  margin-left: 10px;\n  cursor: pointer;\n"]))
        );
      function $d(e) {
        return r.a.createElement(
          sm,
          null,
          r.a.createElement(
            um,
            null,
            r.a.createElement(
              xm,
              null,
              r.a.createElement("img", {
                alt: "",
                src: "/images/back.svg",
                onClick: function () {
                  e.changeExpand(0);
                },
              }),
              r.a.createElement(pm, null, e.graphName)
            ),
            r.a.createElement(
              xm,
              null,
              r.a.createElement(gm, null, "Expand"),
              r.a.createElement(hm, { src: "/images/refresh.svg" })
            )
          ),
          r.a.createElement(
            S.Row,
            { style: { width: "100%", justifyContent: "space-between" } },
            r.a.createElement(
              fm,
              null,
              r.a.createElement(
                bm,
                null,
                r.a.createElement(
                  "select",
                  { id: "cars", className: "select" },
                  r.a.createElement(
                    "option",
                    { value: "volvo", className: "select-dropdown" },
                    "Last 5 days"
                  ),
                  r.a.createElement(
                    "option",
                    { value: "saab", className: "select-dropdown" },
                    "Last 7 days"
                  ),
                  r.a.createElement(
                    "option",
                    { value: "mercedes", className: "select-dropdown" },
                    "Last 15 days"
                  ),
                  r.a.createElement(
                    "option",
                    { value: "audi", className: "select-dropdown" },
                    "Last 25 days"
                  )
                )
              ),
              r.a.createElement(
                vm,
                null,
                r.a.createElement(Em, null, "Contract from"),
                r.a.createElement(
                  wm,
                  null,
                  "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                )
              ),
              r.a.createElement(
                vm,
                null,
                r.a.createElement(Em, null, "Network"),
                r.a.createElement(wm, null, "Mainnet")
              ),
              r.a.createElement(
                vm,
                null,
                r.a.createElement(Em, null, "Contract from"),
                r.a.createElement(
                  wm,
                  null,
                  "xdcabfe4184e5f9f600fe86d20e2a32c99be1768b3c"
                )
              ),
              r.a.createElement(
                vm,
                null,
                r.a.createElement(Em, null, "Network"),
                r.a.createElement(wm, null, "Mainnet")
              ),
              r.a.createElement(
                vm,
                null,
                r.a.createElement(Em, null, "Network"),
                r.a.createElement(wm, null, "Mainnet")
              )
            )
          )
        );
      }
      var em,
        nm,
        tm,
        am,
        rm,
        lm,
        im,
        om,
        cm,
        dm,
        mm,
        sm = E.a.div(
          Md ||
            (Md = Object(h.a)([
              "\n  width: 100%;\n  padding: 50px;\n  background-color: #ecf0f7;\n",
            ]))
        ),
        pm = E.a.div(
          Fd ||
            (Fd = Object(h.a)([
              "\n  text-align: left;\n  font: normal normal 600 24px/29px Inter;\n  letter-spacing: 0px;\n  color: #191919;\n",
            ]))
        ),
        um = E.a.div(
          _d ||
            (_d = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n",
            ]))
        ),
        fm = E.a.div(
          Bd ||
            (Bd = Object(h.a)([
              "\n  width: 100%;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 6px;\n  height: auto;\n  margin-top: 20px;\n  padding: 20px;\n",
            ]))
        ),
        gm = E.a.button(
          Ld ||
            (Ld = Object(h.a)([
              '\n  background-image: url("/images/Export.svg");\n  background-repeat: no-repeat;\n  background-position: 8px;\n  padding-left: 26px;\n  background-size: 14px;\n  position: relative;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  width: 100%;\n  color: #3163f0;\n  height: 34px;\n  font-size: 1rem;\n  font-weight: 600;\n',
            ]))
        ),
        xm = E.a.div(
          Id ||
            (Id = Object(h.a)(["\n  display: flex;\n  align-items: center;\n"]))
        ),
        bm = E.a.div(
          Pd ||
            (Pd = Object(h.a)([
              "\n  display: flex;\n  justify-content: flex-end;\n",
            ]))
        ),
        hm = E.a.img(
          Xd ||
            (Xd = Object(h.a)(["\n  margin-left: 10px;\n  cursor: pointer;\n"]))
        ),
        Em = E.a.div(
          Vd || (Vd = Object(h.a)(["\n  width: 100%;\n  max-width: 150px;\n"]))
        ),
        wm = E.a.div(
          Gd || (Gd = Object(h.a)(["\n  width: 100%;\n  max-width: 150px;\n"]))
        ),
        vm = E.a.div(
          Kd ||
            (Kd = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  border-top: 1px solid rgb(227, 231, 235);\n  padding: 10px;\n",
            ]))
        );
      function Am(e) {
        var n = r.a.useState(0),
          t = Object(z.a)(n, 2),
          a = t[0],
          l = t[1],
          i = r.a.useState(0),
          o = Object(z.a)(i, 2),
          c = o[0],
          d = o[1],
          m = function (e) {
            console.log("value", e),
              1 === e && d("Transaction over time"),
              2 === e && d("Gas used overtime"),
              3 === e && d("Active users"),
              4 === e && d("Top Callers"),
              5 === e && d("Top Functions Calls"),
              l(e);
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          0 === a ? r.a.createElement(od, { changeExpand: m }) : "",
          a > 0 &&
            a < 4 &&
            r.a.createElement(Nd, { changeExpand: m, graphName: c }),
          a > 3 && r.a.createElement($d, { graphName: c, changeExpand: m })
        );
      }
      var ym = Object(Ee.a)(function () {
        return { dialogBox: { width: "100% !important" } };
      });
      function jm(e) {
        var n = ym();
        return r.a.createElement(
          "div",
          null,
          e.state
            ? r.a.createElement(
                he.a,
                { classes: { paper: n.dialogBox }, open: !0 },
                r.a.createElement(
                  Qm,
                  null,
                  r.a.createElement(
                    Ym,
                    null,
                    r.a.createElement(
                      Zm,
                      null,
                      r.a.createElement(
                        qm,
                        null,
                        "Connect Wallet",
                        r.a.createElement(Wm, {
                          alt: "",
                          src: "/images/XDC-Cross.svg",
                          onClick: e.click,
                        })
                      )
                    ),
                    r.a.createElement(
                      Jm,
                      null,
                      r.a.createElement(
                        Hm,
                        null,
                        r.a.createElement(Km, null, "Step 1"),
                        r.a.createElement("img", {
                          style: { width: "50px" },
                          alt: "",
                          src: "/images/XDCinstall.svg",
                        }),
                        r.a.createElement(Gm, null, "Install XDCPay"),
                        r.a.createElement(
                          Um,
                          null,
                          "Install XDCPay Chrome extension from here."
                        )
                      ),
                      r.a.createElement(
                        Hm,
                        null,
                        r.a.createElement(Km, null, "Step 1"),
                        r.a.createElement("img", {
                          alt: "",
                          src: "/images/XDClogin.svg",
                        }),
                        r.a.createElement(Gm, null, "Login to XDCPay"),
                        r.a.createElement(
                          Um,
                          null,
                          "Login to you account on XDCPay Chrome extension."
                        )
                      ),
                      r.a.createElement(
                        Hm,
                        null,
                        r.a.createElement(Km, null, "Step 1"),
                        r.a.createElement("img", {
                          alt: "",
                          src: "/images/XDCwallet.svg",
                        }),
                        r.a.createElement(Gm, null, "Connect Wallet"),
                        r.a.createElement(
                          Um,
                          null,
                          "Connect your XDCPay wallet with SmartHub."
                        )
                      )
                    ),
                    r.a.createElement(
                      Vm,
                      null,
                      r.a.createElement("img", {
                        style: { paddingLeft: "30px", marginRight: "15px" },
                        alt: "",
                        src: "/images/XDC logo_white.svg",
                      }),
                      "Connect Wallet"
                    )
                  )
                )
              )
            : null
        );
      }
      var Om,
        km,
        Cm,
        Tm,
        zm,
        Sm,
        Rm,
        Dm,
        Nm,
        Mm,
        Fm,
        _m,
        Bm,
        Lm,
        Im,
        Pm,
        Xm,
        Vm = E.a.button(
          em ||
            (em = Object(h.a)([
              "\n  background-repeat: no-repeat;\n  display: -webkit-inline-box;\n  background-position: 0.5rem;\n  padding: 14px;\n  item-align: center;\n  background-size: 0.875rem;\n  width: 264px;\n  height: 50px;\n  padding-top: 9px;\n  background-color: #3163f0;\n  color: #ffffff;\n  border: none;\n  border-radius: 0.25rem;\n  font-size: 16px;\n  font-weight: 600;\n",
            ]))
        ),
        Gm = E.a.div(
          nm ||
            (nm = Object(h.a)([
              "\n  text-align: center;\n  font: normal normal 600 16px/20px Inter;\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0px;\n  color: #1f1f1f;\n  opacity: 1;\n  padding-top: 20px;\n",
            ]))
        ),
        Km = E.a.div(
          tm ||
            (tm = Object(h.a)([
              "\n  text-align: center;\n  font: normal normal normal 14px/17px Inter;\n  letter-spacing: 0px;\n  color: #7b7979;\n  opacity: 1;\n  padding-bottom: 10px;\n",
            ]))
        ),
        Um = E.a.div(
          am ||
            (am = Object(h.a)([
              "\n  text-align: center;\n\n  letter-spacing: 0px;\n  opacity: 1;\n  padding-top: 10px;\n  font-size: 16px;\n  font-weight: normal;\n",
            ]))
        ),
        Hm = E.a.div(rm || (rm = Object(h.a)(["\n  padding: 20px;\n"]))),
        Wm = E.a.img(
          lm ||
            (lm = Object(h.a)([
              "\n  cursor: pointer;\n  width: 16px;\n  transition: width 0.1s;\n  &:hover {\n    width: 18px;\n    box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);\n    -webkit-box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);\n    -moz-box-shadow: 15px 18px 78px -23px rgba(0, 0, 0, 1);\n  }\n",
            ]))
        ),
        Jm = E.a.div(
          im ||
            (im = Object(h.a)([
              "\n  display: flex;\n  padding-bottom: 35px;\n",
            ]))
        ),
        Qm = E.a.div(
          om ||
            (om = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  // padding-left: 30px;\n",
            ]))
        ),
        Ym = E.a.div(
          cm ||
            (cm = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  // padding-bottom: 20px;\n  border-radius: 0.375rem;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 563px;\n  padding: 4px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.375rem;\n  width: 100%;\n  background-color: #ffffff;\n  max-width: 563px;\n  align-items: center;\n  text-align: center;\n  height: 420px;\n",
            ]))
        ),
        qm = E.a.div(
          dm ||
            (dm = Object(h.a)([
              "\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #303134;\n  padding-top: 15px;\n  padding-bottom: 5px;\n  // margin-left: -12px;\n  border-bottom: 1px solid #d8d8d8;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n",
            ]))
        ),
        Zm = E.a.div(
          mm ||
            (mm = Object(h.a)([
              "\n  // padding: 18px 14px 12px 12px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n",
            ]))
        );
      function $m() {
        var e = Object(a.useState)(!0),
          n = Object(z.a)(e, 2),
          t = n[0],
          l = n[1];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            cs,
            null,
            r.a.createElement(
              ds,
              null,
              r.a.createElement(
                ms,
                null,
                r.a.createElement(
                  ps,
                  null,
                  r.a.createElement(
                    S.Row,
                    null,
                    r.a.createElement(
                      xs,
                      null,
                      "Manage your ",
                      r.a.createElement(us, null, "Smart Contracts"),
                      " on XDC Network"
                    )
                  ),
                  r.a.createElement(
                    gs,
                    null,
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
                  ),
                  r.a.createElement(
                    bs,
                    null,
                    "Add Your Smart Contract",
                    r.a.createElement("img", {
                      style: { marginLeft: "0.375rem" },
                      alt: "",
                      src: "/images/questionmark.svg",
                    })
                  )
                ),
                r.a.createElement(
                  ss,
                  null,
                  r.a.createElement(
                    hs,
                    null,
                    r.a.createElement("img", {
                      style: { width: "3.75rem", height: "3.75rem" },
                      alt: "",
                      src: "/images/play.svg",
                    })
                  )
                )
              ),
              r.a.createElement(
                ws,
                null,
                r.a.createElement(
                  Es,
                  null,
                  "Introducing the Smart Contracts -by XDC",
                  r.a.createElement(
                    js,
                    null,
                    "Add smart contract and managing them"
                  )
                ),
                r.a.createElement(
                  fs,
                  null,
                  r.a.createElement(
                    ys,
                    null,
                    r.a.createElement("img", {
                      alt: "",
                      src: "/images/manage contracts.svg",
                    }),
                    r.a.createElement(vs, null, "Manage Contracts"),
                    r.a.createElement(
                      As,
                      null,
                      "You can add and manage any contract deployed on XDC Network."
                    )
                  ),
                  r.a.createElement(
                    ys,
                    null,
                    r.a.createElement("img", {
                      alt: "",
                      src: "/images/analyticsicon.svg",
                    }),
                    r.a.createElement(vs, null, "Analytics"),
                    r.a.createElement(
                      As,
                      null,
                      "View analytics like number of transactions, gas fee etc for the added contract."
                    )
                  ),
                  r.a.createElement(
                    ys,
                    null,
                    r.a.createElement("img", {
                      alt: "",
                      src: "/images/set alerts.svg",
                    }),
                    r.a.createElement(vs, null, "Set Alerts"),
                    r.a.createElement(
                      As,
                      null,
                      "You can set different types of alert for you contracts, without missing any information"
                    )
                  )
                )
              )
            )
          ),
          r.a.createElement(
            "div",
            null,
            r.a.createElement(jm, {
              click: function () {
                return l(!1);
              },
              state: t,
            })
          )
        );
      }
      var es,
        ns,
        ts,
        as,
        rs,
        ls,
        is,
        os,
        cs = E.a.div(
          Om ||
            (Om = Object(h.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        ds = E.a.div(
          km ||
            (km = Object(h.a)([
              "\n  background: #ecf0f7 0% 0% no-repeat padding-box;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-item: center;\n  padding: 3.125rem;\n   @media (min-width: 340px) and (max-width: 768px) {\n",
            ]))
        ),
        ms = E.a.div(
          Cm ||
            (Cm = Object(h.a)([
              "\n  background-color: #ffffff;\n  border-radius: 0.375rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-self: center;\n   height: 500px;\n  max-width: 1306px;\n  @media  (min-width: 340px) and (max-width: 768px) {\n    flex-direction:column;\n    \n    padding-right:30px;\n    padding-top: 30px;\n   \n    padding-left: 46px;\n    height: 778px;\n}\n\n",
            ]))
        ),
        ss = E.a.div(
          Tm ||
            (Tm = Object(h.a)([
              "\n  width: 100%;\n  padding: 4.375rem;\n   @media (min-width: 340px) and (max-width: 768px) {\n     padding: 4.375rem;\n         height: 100%;\n",
            ]))
        ),
        ps = E.a.div(
          zm || (zm = Object(h.a)(["\n  width: 100%;\n  padding: 2.5rem;\n"]))
        ),
        us = E.a.span(
          Sm ||
            (Sm = Object(h.a)([
              "\n  color: #0089ff;\n  white-space: nowrap;\n",
            ]))
        ),
        fs = E.a.div(
          Rm ||
            (Rm = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  max-width: 47.438rem;\n  width: 100%;\n",
            ]))
        ),
        gs = E.a.div(
          Dm ||
            (Dm = Object(h.a)([
              "\n  display: flex;\n  width: 100%;\n  font-size: 1rem;\n",
            ]))
        ),
        xs = E.a.div(
          Nm ||
            (Nm = Object(h.a)([
              "\n  width: 100%;\n  padding-bottom: 0.938rem;\n  font-size: 2rem;\n  font-weight: 600;\n",
            ]))
        ),
        bs = E.a.button(
          Mm ||
            (Mm = Object(h.a)([
              "\n  background-repeat: no-repeat;\n  background-position: 0.5rem;\n  padding: 0.875rem;\n  item-align: center;\n  background-size: 0.875rem;\n  position: relative;\n  background-color: #3163f0;\n  color: #ffffff;\n  border: none;\n  border-radius: 0.25rem;\n  margin-top: 1.875rem;\n  height: 3.125rem;\n  display: flex;\n  font-size: 1rem;\n  font-weight: 600;\n  white-space: nowrap;\n",
            ]))
        ),
        hs = E.a.div(
          Fm ||
            (Fm = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 0.125rem solid #d8d8d8;\n  border-radius: 0.125rem;\n  opacity: 1;\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n @media (min-width: 340px) and (max-width: 768px) {\n\n\n\n",
            ]))
        ),
        Es = E.a.div(
          _m ||
            (_m = Object(h.a)([
              "\n  font-size: 2rem;\n  font-weight: 600;\n  color: #1f1f1f;\n  padding: 3.75rem;\n\n",
            ]))
        ),
        ws = E.a.div(
          Bm ||
            (Bm = Object(h.a)([
              "\n  background-color: none;\n  padding-bottom: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n",
            ]))
        ),
        vs = E.a.div(
          Lm ||
            (Lm = Object(h.a)([
              "\n  text-align: center;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 0.375rem;\n  color: #1f1f1f;\n  opacity: 1;\n",
            ]))
        ),
        As = E.a.div(
          Im ||
            (Im = Object(h.a)([
              "\n  text-align: center;\n  font-size: 1rem;\n  color: #4b4b4b;\n  margin-top: 0.438rem;\n  // width: 15rem;\n",
            ]))
        ),
        ys = E.a.div(
          Pm ||
            (Pm = Object(h.a)([
              "\n  padding: 0.625rem;\n  // width: 28.125rem;\n  width:100%;\n  height: 150px;\n  margin: 0px 10px 20px 10px;\n  max-width: 18.75rem;\n  outline: none;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  cursor: pointer;\n\n",
            ]))
        ),
        js = E.a.div(
          Xm ||
            (Xm = Object(h.a)([
              "\n  font-size: 1rem;\n  color: #4b4b4b;\n  text-align: center;\n  width: 100%;\n  padding-bottom: 1.25rem;\n",
            ]))
        ),
        Os = t(17);
      function ks() {
        return r.a.createElement(
          Ls,
          null,
          r.a.createElement(
            Ps,
            null,
            r.a.createElement(
              Is,
              null,
              r.a.createElement(
                Gs,
                null,
                r.a.createElement(Ks, null, "Alert Type"),
                r.a.createElement(Ks, null, "Contract"),
                r.a.createElement(Ks, null, "Tx Hash"),
                r.a.createElement(Ks, null, "Network"),
                r.a.createElement(Ks, null, "When")
              )
            ),
            r.a.createElement(
              Xs,
              null,
              r.a.createElement(
                Vs,
                null,
                r.a.createElement(Us, null, "Sucessfull transaction"),
                r.a.createElement(Us, null, "App_Transactions"),
                r.a.createElement(Us, null, "0xndfahkk57..fj9"),
                r.a.createElement(Us, null, "XDC Mainnet"),
                r.a.createElement(Us, null, "02.2.2022 12:02")
              )
            ),
            r.a.createElement(
              Xs,
              null,
              r.a.createElement(
                Vs,
                null,
                r.a.createElement(Us, null, "Sucessfull transaction"),
                r.a.createElement(Us, null, "App_Transactions"),
                r.a.createElement(Us, null, "0xndfahkk57..fj9"),
                r.a.createElement(Us, null, "XDC Mainnet"),
                r.a.createElement(Us, null, "02.2.2022 12:02")
              )
            )
          )
        );
      }
      var Cs,
        Ts,
        zs,
        Ss,
        Rs,
        Ds,
        Ns,
        Ms,
        Fs,
        _s,
        Bs,
        Ls = E.a.div(
          es ||
            (es = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.375rem;\n  opacity: 1;\n  margin-top: 1.25rem;\n  height: 15.625rem;\n\n  overflow-y: hidden;\n  @media (min-width: 300px) and (max-width: 767px) {\n    width: 100%;\n    ::-webkit-scrollbar {\n      width: 10px;\n      border: 0.5px solid rgb(204, 229, 243);\n      outline: none;\n    }\n    ::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 5px grey;\n      border-radius: 2px;\n    }\n    ::-webkit-scrollbar-thumb {\n      background: rgb(56, 56, 231);\n      border-radius: 15px;\n    }\n  }\n",
            ]))
        ),
        Is = E.a.div(
          ns ||
            (ns = Object(h.a)([
              "\n  padding: 0.738rem;\n  border-bottom: 0.063rem solid #e3e7eb;\n\n  @media (min-width: 300px) and (max-width: 768px) {\n  }\n",
            ]))
        ),
        Ps = E.a.div(
          ts ||
            (ts = Object(h.a)([
              "\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 300px) and (max-width: 768px) {\n    // overflow: scroll;\n  }\n",
            ]))
        ),
        Xs = E.a.div(
          as ||
            (as = Object(h.a)([
              "\n  padding: 0.938rem;\n  border-bottom: 0.063rem solid #e3e7eb;\n  @media (min-width: 300px) and (max-width: 768px) {\n  }\n",
            ]))
        ),
        Vs = E.a.div(
          rs ||
            (rs = Object(h.a)([
              "\n  display: flex;\n  @media (min-width: 300px) and (max-width: 768px) {\n    column-gap: 54px;\n  }\n",
            ]))
        ),
        Gs = E.a.div(
          ls ||
            (ls = Object(h.a)([
              "\n  display: flex;\n  @media (min-width: 300px) and (max-width: 768px) {\n    column-gap: 84px;\n  }\n",
            ]))
        ),
        Ks = E.a.div(
          is ||
            (is = Object(h.a)([
              "\n  display: flex;\n  flex-flow: column nowrap;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #102c78;\n  width: 100%;\n  max-width: 18.75rem;\n  @media (min-width: 300px) and (max-width: 768px) {\n    margin-right: 32px;\n    margin-left: 5px;\n  }\n",
            ]))
        ),
        Us = E.a.div(
          os ||
            (os = Object(h.a)([
              "\n  display: flex;\n  flex-flow: column nowrap;\n  font-size: 0.875rem;\n  color: #191919;\n  font-size: 0.875rem;\n  // font-weight: 600;\n  width: 100%;\n  max-width: 18.75rem;\n",
            ]))
        );
      function Hs() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            op,
            null,
            r.a.createElement(
              cp,
              null,
              r.a.createElement(
                S.Row,
                null,
                r.a.createElement(
                  mp,
                  { style: { borderBottom: "none" } },
                  "Destinations"
                )
              ),
              r.a.createElement(
                fp,
                null,
                r.a.createElement(
                  sp,
                  null,
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/slack.svg",
                    style: { marginRight: "0.25rem", width: "1.3rem" },
                  }),
                  " ",
                  "Slack"
                ),
                r.a.createElement(
                  sp,
                  null,
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/webhook.svg",
                    style: { marginRight: "0.25rem", width: "1.3rem" },
                  }),
                  "Webhook"
                ),
                r.a.createElement(
                  sp,
                  null,
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/email.svg",
                    style: { marginRight: "0.25rem", width: "1.3rem" },
                  }),
                  "Email"
                )
              )
            ),
            r.a.createElement(
              mp,
              { style: { paddingBottom: "10px", paddingLeft: "20px" } },
              "Active Destination"
            ),
            r.a.createElement(
              dp,
              null,
              r.a.createElement(
                cp,
                null,
                r.a.createElement(
                  up,
                  null,
                  r.a.createElement(bp, { alt: "", src: "/images/email.svg" }),
                  r.a.createElement(
                    pp,
                    { style: { color: "#191919" } },
                    "Finance"
                  ),
                  r.a.createElement(
                    pp,
                    { style: { fontWeight: "normal" } },
                    "it@supportteam.com"
                  ),
                  r.a.createElement(
                    pp,
                    null,
                    r.a.createElement(
                      gp,
                      { style: { fontWeight: "normal" } },
                      "Verified"
                    )
                  ),
                  r.a.createElement(
                    pp,
                    null,
                    r.a.createElement("img", {
                      alt: "",
                      src: "/images/deletes.svg",
                      style: { width: "1.1rem" },
                    })
                  )
                )
              ),
              r.a.createElement(
                cp,
                null,
                r.a.createElement(
                  up,
                  null,
                  r.a.createElement(bp, { alt: "", src: "/images/email.svg" }),
                  r.a.createElement(
                    pp,
                    { style: { color: "#191919" } },
                    " Finance"
                  ),
                  r.a.createElement(
                    pp,
                    { style: { fontWeight: "normal" } },
                    "http://webhook.site/ssss"
                  ),
                  r.a.createElement(
                    pp,
                    null,
                    r.a.createElement(
                      gp,
                      { style: { fontWeight: "normal" } },
                      "Connected"
                    )
                  ),
                  r.a.createElement(
                    pp,
                    null,
                    r.a.createElement(xp, {
                      src: "/images/deletes.svg",
                      style: { width: "1.1rem" },
                    })
                  )
                )
              )
            )
          )
        );
      }
      var Ws,
        Js,
        Qs,
        Ys,
        qs,
        Zs,
        $s,
        ep,
        np,
        tp,
        ap,
        rp,
        lp,
        ip,
        op = E.a.div(
          Cs ||
            (Cs = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.375rem;\n  opacity: 1;\n  margin-top: 1.25rem;\n  height: auto;\n",
            ]))
        ),
        cp = E.a.div(
          Ts ||
            (Ts = Object(h.a)([
              "\n  padding-bottom: 0.5rem;\n  padding-left: 10px;\n  // border-bottom: 1px solid #e3e7eb;\n",
            ]))
        ),
        dp = E.a.div(
          zs ||
            (zs = Object(h.a)([
              "\n  overflow-y: hidden;\n  height: 109px;\n  @media (min-width: 300px) and (max-width: 767px) {\n    width: 100%;\n    ::-webkit-scrollbar {\n      width: 10px;\n      border: 0.5px solid rgb(204, 229, 243);\n      outline: none;\n    }\n    ::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 5px grey;\n      border-radius: 8px;\n    }\n    ::-webkit-scrollbar-thumb {\n      background:#3163f0;\n      border-radius: 15px;\n    }\n  }\n",
            ]))
        ),
        mp = E.a.div(
          Ss ||
            (Ss = Object(h.a)([
              "\n  display: flex;\n  flex-flow: column nowrap;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #102c78;\n  width: 100%;\n  margin-bottom: 1.25rem;\n  border-bottom: 0.125rem solid #e3e7eb;\n",
            ]))
        ),
        sp = E.a.div(
          Rs ||
            (Rs = Object(h.a)([
              "\n  width: 6rem;\n  height: 2.5rem;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #416be0;\n  border-radius: 0.375rem;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  color: #1d3c93;\n  font-size: 0.875rem;\n  @media (min-width: 300px) and (max-width: 768px) {\n  }\n",
            ]))
        ),
        pp = E.a.div(
          Ds ||
            (Ds = Object(h.a)([
              "\n  display: flex;\n  flex-flow: column nowrap;\n  font-size: 0.875rem;\n  font-weight: 600;\n  min-width: 200px;\n  color: #102c78;\n  width: 100%;\n  max-width: 11.25rem;\n  margin: 0.25rem;\n  @media (min-width: 300px) and (max-width: 768px) {\n  }\n",
            ]))
        ),
        up = E.a.div(
          Ns ||
            (Ns = Object(h.a)([
              "\n  display: flex;\n  @media (min-width: 300px) and (max-width: 768px) {\n    column-gap: 55px;\n  }\n",
            ]))
        ),
        fp = E.a.div(
          Ms ||
            (Ms = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  text-align: center;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 21.25rem;\n  margin-bottom: 1.25rem;\n  @media (min-width: 300px) and (max-width: 768px) {\n  }\n",
            ]))
        ),
        gp = E.a.text(
          Fs ||
            (Fs = Object(h.a)([
              "\n  color: #00a58c;\n  font-size: 0.875rem;\n",
            ]))
        ),
        xp = E.a.img(_s || (_s = Object(h.a)(["\n  width: 1rem;\n"]))),
        bp = E.a.img(
          Bs ||
            (Bs = Object(h.a)([
              "\n  width: 1rem;\n  @media (min-width: 300px) and (max-width: 768px) {\n    margin-right: -49px;\n    width: 1rem;\n  }\n",
            ]))
        );
      function hp() {
        var e,
          n = r.a.useState("Rules"),
          t = Object(z.a)(n, 2),
          a = t[0],
          l = t[1],
          i = function (e) {
            console.log("clicked"), l(e.target.id);
          },
          o = function () {
            x.push("/dashboard/Alerting/alert-details");
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            S.Row,
            null,
            r.a.createElement(
              au,
              null,
              r.a.createElement(
                S.Row,
                null,
                r.a.createElement(
                  ou,
                  null,
                  r.a.createElement(
                    Zp,
                    { style: { color: "#191919" } },
                    "Alerting"
                  ),
                  r.a.createElement(
                    ru,
                    {
                      onClick: function () {
                        return x.push("/dashboard/add-alert");
                      },
                    },
                    "Add Alert"
                  )
                )
              ),
              r.a.createElement(
                $p,
                null,
                r.a.createElement(
                  iu,
                  null,
                  r.a.createElement(
                    S.Row,
                    null,
                    r.a.createElement(
                      cu,
                      null,
                      r.a.createElement(
                        du,
                        {
                          id: "Rules",
                          onClick: i,
                          style: {
                            color: "Rules" === a ? "#3163F0" : "#AEB7D0",
                            display: "flex",
                            paddingBottom: "0.875rem",
                            paddingTop: " 9px",
                            fontSize: "14px",
                            borderBottom:
                              "Rules" === a ? "2px solid #3163F0" : "",
                          },
                        },
                        r.a.createElement("img", {
                          alt: "",
                          style: { marginRight: "0.375rem" },
                          src:
                            "Rules" === a
                              ? "/images/rules.svg"
                              : "/images/rules1.svg",
                        }),
                        "Rules"
                      ),
                      r.a.createElement(
                        du,
                        {
                          id: "History",
                          onClick: i,
                          style: {
                            color: "History" === a ? "#3163F0" : "#AEB7D0",
                            display: "flex",
                            paddingBottom: "0.875rem",
                            paddingTop: " 9px",
                            fontSize: "14px",
                            borderBottom:
                              "History" === a ? "0.125rem solid #3163F0" : "",
                          },
                        },
                        r.a.createElement("img", {
                          alt: "",
                          style: { marginRight: "0.375rem" },
                          src:
                            "History" === a
                              ? "/images/history_blue.svg"
                              : "/images/history.svg",
                        }),
                        "History"
                      ),
                      r.a.createElement(
                        du,
                        {
                          id: "Destination",
                          onClick: i,
                          style:
                            ((e = {
                              color:
                                "Destination" === a ? "#3163F0" : "#AEB7D0",
                              display: "flex",
                              fontSize: "1rem",
                              paddingBottom: "0.875rem",
                              paddingTop: " 9px",
                            }),
                            Object(Os.a)(e, "fontSize", "14px"),
                            Object(Os.a)(
                              e,
                              "borderBottom",
                              "Destination" === a
                                ? "0.125rem solid #3163F0"
                                : ""
                            ),
                            e),
                        },
                        r.a.createElement("img", {
                          alt: "",
                          style: { marginRight: "5px" },
                          src:
                            "Destination" === a
                              ? "/images/destination_blue.svg"
                              : "/images/destination.svg",
                        }),
                        "Destination"
                      )
                    )
                  )
                ),
                "Rules" === a &&
                  r.a.createElement(
                    qp,
                    null,
                    r.a.createElement(
                      mu,
                      null,
                      r.a.createElement(
                        lu,
                        null,
                        r.a.createElement(
                          eu,
                          { onClick: o },
                          r.a.createElement(nu, null, "Contract Name"),
                          r.a.createElement(nu, null, "Address"),
                          r.a.createElement(nu, null, "Network"),
                          r.a.createElement(nu, null, "Alert Type"),
                          r.a.createElement(nu, null),
                          r.a.createElement(nu, null)
                        )
                      ),
                      r.a.createElement(
                        lu,
                        null,
                        r.a.createElement(
                          eu,
                          { onClick: o },
                          r.a.createElement(tu, null, "App_Transactions"),
                          r.a.createElement(tu, null, "xdcabfe\u20268b3c"),
                          r.a.createElement(tu, null, "XDC Mainnet"),
                          r.a.createElement(tu, null, "Sucessfull"),
                          r.a.createElement(
                            tu,
                            { style: { fontSize: "14px", color: "#00A58C" } },
                            "Enabled"
                          ),
                          r.a.createElement(
                            tu,
                            null,
                            r.a.createElement("img", {
                              alt: "",
                              src: "/images/delete_blue.svg",
                              style: { width: "1rem" },
                            })
                          )
                        )
                      ),
                      r.a.createElement(
                        lu,
                        null,
                        r.a.createElement(
                          eu,
                          { onClick: o },
                          r.a.createElement(tu, null, "App_Transactions"),
                          r.a.createElement(tu, null, "xdcabfe\u20268b3c"),
                          r.a.createElement(tu, null, "XDC Mainnet"),
                          r.a.createElement(tu, null, "Failed "),
                          r.a.createElement(
                            tu,
                            {
                              style: { fontSize: "0.875rem", color: "#00A58C" },
                            },
                            "Enabled"
                          ),
                          r.a.createElement(
                            tu,
                            null,
                            r.a.createElement("img", {
                              alt: "",
                              src: "/images/delete_blue.svg",
                              style: { width: "1rem" },
                            })
                          )
                        )
                      )
                    )
                  ),
                "History" === a && r.a.createElement(ks, null),
                "Destination" === a && r.a.createElement(Hs, null)
              )
            )
          )
        );
      }
      var Ep,
        wp,
        vp,
        Ap,
        yp,
        jp,
        Op,
        kp,
        Cp,
        Tp,
        zp,
        Sp,
        Rp,
        Dp,
        Np,
        Mp,
        Fp,
        _p,
        Bp,
        Lp,
        Ip,
        Pp,
        Xp,
        Vp,
        Gp,
        Kp,
        Up,
        Hp,
        Wp,
        Jp,
        Qp,
        Yp,
        qp = E.a.div(
          Ws ||
            (Ws = Object(h.a)([
              "\n  background-color: #ffffff;\n  border-radius: 0.375rem;\n  width: 100%;\n  height: 15rem;\n  padding: 0.625rem;\n  overflow-y: hidden;\n\n  @media (min-width: 300px) and (max-width: 767px) {\n    width: 100%;\n    ::-webkit-scrollbar {\n      width: 10px;\n      border: 0.5px solid rgb(204, 229, 243);\n      outline: none;\n    }\n    ::-webkit-scrollbar-track {\n      box-shadow: inset 0 0 5px grey;\n      border-radius: 2px;\n    }\n    ::-webkit-scrollbar-thumb {\n      background: rgb(56, 56, 231);\n      border-radius: 15px;\n    }\n  }\n",
            ]))
        ),
        Zp = E.a.div(
          Js ||
            (Js = Object(h.a)([
              "\n  font-size: 1.5rem;\n  font-weight: 600;\n  @media (min-width: 300px) and (max-width: 768px) {\n    font-size: 1.2rem;\n    font-weight: 600;\n  }\n",
            ]))
        ),
        $p = E.a.div(
          Qs ||
            (Qs = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.375rem;\n  width: 100%;\n\n  background-color: #ffffff;\n  padding: 0.5rem;\n\n  white-space: nowrap;\n",
            ]))
        ),
        eu = E.a.div(
          Ys ||
            (Ys = Object(h.a)([
              "\n  display: flex;\n  @media (min-width: 300px) and (max-width: 768px) {\n    column-gap: 84px;\n  }\n",
            ]))
        ),
        nu = E.a.div(
          qs ||
            (qs = Object(h.a)([
              "\n  display: flex;\n  flex-flow: column nowrap;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #102c78;\n  width: 100%;\n  max-width: 18.75rem;\n  @media (min-width: 300px) and (max-width: 768px) {\n    margin-right: 40px;\n  }\n",
            ]))
        ),
        tu = E.a.div(
          Zs ||
            (Zs = Object(h.a)([
              "\n  display: flex;\n  flex-flow: column nowrap;\n  font-size: 0.875rem;\n  color: #191919;\n  width: 100%;\n  max-width: 18.75rem;\n  @media (min-width: 300px) and (max-width: 768px) {\n    margin-right: 20px;\n    // width: 100%;\n    // max-width: 200px;\n  }\n",
            ]))
        ),
        au = E.a.div(
          $s ||
            ($s = Object(h.a)([
              "\n  background: #ecf0f7 0% 0% no-repeat padding-box;\n  opacity: 1;\n  width: 100%;\n  padding: 2.5rem;\n  height: 100vh;\n  @media (min-width: 340px) and (max-width: 768px) {\n   padding: 38px 20px 20px 20px;\n\n",
            ]))
        ),
        ru = E.a.button(
          ep ||
            (ep = Object(h.a)([
              '\n  background-image: url("/images/Add.svg");\n  background-repeat: no-repeat;\n  background-position: 0.5rem;\n  padding-left: 1.313rem;\n  background-size: 0.875rem;\n  position: relative;\n  background-color: #3163f0;\n  color: #ffffff;\n  border: none;\n  border-radius: 0.25rem;\n  width: 6.25rem;\n  height: 1.875rem;\n  font-size: 0.75rem;\n',
            ]))
        ),
        lu = E.a.div(
          np ||
            (np = Object(h.a)([
              "\n  padding: 0.938rem;\n  border-bottom: 0.063rem solid #e3e7eb;\n\n  padding-left: 0;\n",
            ]))
        ),
        iu = E.a.div(
          tp ||
            (tp = Object(h.a)([
              "\n  // padding: 0.938rem;\n  border-bottom: 0.063rem solid #e3e7eb;\n",
            ]))
        ),
        ou = E.a.div(
          ap ||
            (ap = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  width: 100%;\n  // max-width: 75rem;\n  margin-bottom: 1.25rem;\n",
            ]))
        ),
        cu = E.a.div(
          rp ||
            (rp = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 21.875rem;\n  cursor: pointer;\n  // margin: 25px 0px 10px 17px;\n",
            ]))
        ),
        du = E.a.div(
          lp ||
            (lp = Object(h.a)([
              "\n  padding: 0.313rem 0.5rem 0.313rem 0.5rem;\n  @media (min-width: 340px) and (max-width: 768px) {\n   padding: 0rem 0rem 0rem 0rem;\n",
            ]))
        ),
        mu = E.a.div(ip || (ip = Object(h.a)([""])));
      function su() {
        var e = r.a.useState("Rules"),
          n = Object(z.a)(e, 2),
          t = n[0],
          a = n[1],
          l = function (e) {
            a(e.target.id);
          },
          i = r.a.useState("/images/Successful transaction_blue.svg"),
          o = Object(z.a)(i, 2),
          c = o[0],
          d = o[1],
          m = r.a.useState("/images/Failed transactionToken.svg"),
          s = Object(z.a)(m, 2),
          p = s[0],
          u = s[1],
          f = r.a.useState("/images/XRC token.svg"),
          g = Object(z.a)(f, 2),
          b = g[0],
          h = g[1],
          E = r.a.useState("/images/XDC logo.svg"),
          w = Object(z.a)(E, 2),
          v = w[0],
          A = w[1],
          y = r.a.useState("/images/XDC logo.svg"),
          j = Object(z.a)(y, 2),
          O = j[0],
          k = j[1],
          C = r.a.useState("/images/state change_blue.svg"),
          T = Object(z.a)(C, 2),
          R = T[0],
          D = T[1],
          N = r.a.useState("/images/address_blue.svg"),
          M = Object(z.a)(N, 2),
          F = M[0],
          _ = M[1],
          B = r.a.useState("/images/network_logo.svg"),
          L = Object(z.a)(B, 2),
          I = L[0],
          P = L[1],
          X = r.a.useState("/images/Tag_logo.svg"),
          V = Object(z.a)(X, 2),
          G = V[0],
          K = V[1],
          U = r.a.useState("ALERT_TYPE"),
          H = Object(z.a)(U, 2),
          W = H[0],
          J = H[1],
          Q = function (e) {
            J(e);
          },
          Y = function (e) {
            "successfulTransaction" === e &&
              d("/images/Successful transaction.svg"),
              "failedTransaction" === e &&
                u("/images/Failed transaction_white.svg"),
              "tokenTransfer" === e && h("/images/XRCtoken_white.svg"),
              "transactionValue" === e && A("/images/XDC logo_white.svg"),
              "balanceToken" === e && k("/images/XDC logo_white.svg"),
              "stateChange" === e && D("/images/statechange_white.svg"),
              "addressToken" === e && _("/images/Address_logowhite.svg"),
              "networkAddress" === e && P("/images/networks_white.svg"),
              "tagAddress" === e && K("/images/tag_white.svg");
          },
          q = function (e) {
            "successfulTransaction" === e &&
              d("/images/Successful transaction_blue.svg"),
              "failedTransaction" === e &&
                u("/images/Failed transactionToken.svg"),
              "tokenTransfer" === e && h("/images/XRC token.svg"),
              "transactionValue" === e && A("/images/XDC logo.svg"),
              "balanceToken" === e && k("/images/XDC logo.svg"),
              "stateChange" === e && D("/images/state change_blue.svg"),
              "addressToken" === e && _("/images/address_blue.svg"),
              "networkAddress" === e && P("/images/network_logo.svg"),
              "tagAddress" === e && K("/images/Tag_logo.svg");
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            Lu,
            null,
            r.a.createElement(
              S.Row,
              null,
              r.a.createElement(
                Pu,
                null,
                r.a.createElement(
                  Iu,
                  null,
                  r.a.createElement("img", {
                    alt: "",
                    style: { marginRight: "0.625rem" },
                    src: "/images/back.svg",
                    onClick: function () {
                      x.push("/dashboard/rules");
                    },
                  }),
                  "Create Alert"
                )
              )
            ),
            r.a.createElement(
              Bu,
              null,
              r.a.createElement(
                Xu,
                null,
                r.a.createElement(
                  Vu,
                  {
                    id: "Rules",
                    onClick: l,
                    style: {
                      color: "Rules" === t ? "#3163F0" : "#AEB7D0",
                      display: "flex",
                      paddingBottom: "0.875rem",
                      paddingTop: "0.5rem",
                      fontSize: "14px",
                      borderBottom: "Rules" === t ? "2px solid blue" : "",
                    },
                  },
                  r.a.createElement("img", {
                    alt: "",
                    style: { marginRight: "0.375rem" },
                    src:
                      "Rules" === t
                        ? "/images/rules.svg"
                        : "/images/rules1.svg",
                  }),
                  "Rules"
                ),
                r.a.createElement(
                  Vu,
                  {
                    id: "History",
                    onClick: l,
                    style: {
                      color: "History" === t ? "#3163F0" : "#AEB7D0",
                      display: "flex",
                      paddingBottom: "0.875rem",
                      paddingTop: "0.5rem",
                      fontSize: "14px",
                      borderBottom:
                        "History" === t ? "0.125rem solid blue" : "",
                    },
                  },
                  r.a.createElement("img", {
                    alt: "",
                    style: { marginRight: "0.375rem" },
                    src:
                      "History" === t
                        ? "/images/history_blue.svg"
                        : "/images/history.svg",
                  }),
                  "History"
                ),
                r.a.createElement(
                  Vu,
                  {
                    id: "Destination",
                    onClick: l,
                    style: {
                      color: "Destination" === t ? "#3163F0" : "#AEB7D0",
                      display: "flex",
                      paddingBottom: "0.875rem",
                      paddingTop: "0.5rem",
                      fontSize: "14px",
                      borderBottom:
                        "Destination" === t ? "0.125rem solid blue" : "",
                    },
                  },
                  r.a.createElement("img", {
                    alt: "",
                    style: { marginRight: "5px" },
                    src:
                      "Destination" === t
                        ? "/images/destination_blue.svg"
                        : "/images/destination.svg",
                  }),
                  "Destination"
                )
              ),
              "Rules" === t &&
                r.a.createElement(
                  "div",
                  { style: { padding: "20px 0px 0px 10px" } },
                  r.a.createElement(
                    Gu,
                    null,
                    "ALERT_TYPE" === W
                      ? r.a.createElement($u, null, "1")
                      : r.a.createElement(Yu, { src: "/images/tick-icon.svg" }),
                    r.a.createElement(
                      Qu,
                      null,
                      r.a.createElement(Ku, null, " Alert type"),
                      r.a.createElement(Uu, null, "Select a alert triger type")
                    )
                  ),
                  r.a.createElement(
                    qu,
                    null,
                    r.a.createElement(Zu, null),
                    "ALERT_TYPE" === W &&
                      r.a.createElement(
                        Wu,
                        null,
                        r.a.createElement(
                          Hu,
                          {
                            onClick: function () {
                              return Q("ALERT_TARGET");
                            },
                            onMouseOver: function () {
                              return Y("successfulTransaction");
                            },
                            onMouseOut: function () {
                              return q("successfulTransaction");
                            },
                          },
                          r.a.createElement("img", { alt: "", src: c }),
                          r.a.createElement(Fu, null, "Successful Transaction"),
                          r.a.createElement(
                            _u,
                            null,
                            "trigger when Successful Transaction happen"
                          )
                        ),
                        r.a.createElement(
                          Hu,
                          {
                            onClick: function () {
                              return Q("ALERT_TARGET");
                            },
                            onMouseOver: function () {
                              return Y("failedTransaction");
                            },
                            onMouseOut: function () {
                              return q("failedTransaction");
                            },
                          },
                          r.a.createElement("img", { alt: "", src: p }),
                          r.a.createElement(Fu, null, "Failed Transaction"),
                          r.a.createElement(
                            _u,
                            null,
                            "trigger when Transactions fails"
                          )
                        ),
                        r.a.createElement(
                          Hu,
                          {
                            onClick: function () {
                              return Q("ALERT_TARGET");
                            },
                            onMouseOver: function () {
                              return Y("tokenTransfer");
                            },
                            onMouseOut: function () {
                              return q("tokenTransfer");
                            },
                          },
                          r.a.createElement("img", { alt: "", src: b }),
                          r.a.createElement(Fu, null, "XRC-20 Token Transfer "),
                          r.a.createElement(
                            _u,
                            null,
                            "trigger whenever an XRC-20 Token Transfer happen"
                          )
                        ),
                        r.a.createElement(
                          Hu,
                          {
                            onClick: function () {
                              return Q("ALERT_TARGET");
                            },
                            onMouseOver: function () {
                              return Y("transactionValue");
                            },
                            onMouseOut: function () {
                              return q("transactionValue");
                            },
                          },
                          r.a.createElement("img", { alt: "", src: v }),
                          r.a.createElement(Fu, null, "Transaction Value"),
                          r.a.createElement(
                            _u,
                            null,
                            "trigger whenever transaction value matches"
                          )
                        ),
                        r.a.createElement(
                          Hu,
                          {
                            onClick: function () {
                              return Q("ALERT_TARGET");
                            },
                            onMouseOver: function () {
                              return Y("balanceToken ");
                            },
                            onMouseOut: function () {
                              return q("balanceToken");
                            },
                          },
                          r.a.createElement("img", { alt: "", src: O }),
                          r.a.createElement(Fu, null, "XDC Balance"),
                          r.a.createElement(
                            _u,
                            null,
                            "trigger when XDC balance falls below certain threshold"
                          )
                        ),
                        r.a.createElement(
                          Hu,
                          {
                            onClick: function () {
                              return Q("ALERT_TARGET");
                            },
                            onMouseOver: function () {
                              return Y("stateChange");
                            },
                            onMouseOut: function () {
                              return q("stateChange");
                            },
                          },
                          r.a.createElement("img", { alt: "", src: R }),
                          r.a.createElement(Fu, null, "State Change"),
                          r.a.createElement(
                            _u,
                            null,
                            "trigger whenever stable variable changes"
                          )
                        ),
                        r.a.createElement(
                          Hu,
                          null,
                          r.a.createElement("img", {
                            alt: "",
                            src: "/images/functioncall.svg",
                          }),
                          r.a.createElement(Fu, null, "Function call"),
                          r.a.createElement(_u, null, "COMMING SOON")
                        )
                      )
                  ),
                  r.a.createElement(
                    Gu,
                    null,
                    "ALERT_TYPE" === W || "ALERT_TARGET" === W
                      ? r.a.createElement($u, null, "2")
                      : r.a.createElement(Yu, { src: "/images/tick-icon.svg" }),
                    r.a.createElement(
                      Qu,
                      null,
                      r.a.createElement(Ku, null, " Alert target"),
                      r.a.createElement(
                        Uu,
                        null,
                        "Select a address which alert will be trigger"
                      )
                    )
                  ),
                  r.a.createElement(
                    qu,
                    null,
                    r.a.createElement(Zu, null),
                    "ALERT_TARGET" === W &&
                      r.a.createElement(
                        Ju,
                        null,
                        r.a.createElement(
                          Hu,
                          {
                            onClick: function () {
                              return Q("PARAMETERS");
                            },
                            onMouseOver: function () {
                              return Y("addressToken");
                            },
                            onMouseOut: function () {
                              return q("addressToken");
                            },
                          },
                          r.a.createElement("img", { alt: "", src: F }),
                          r.a.createElement(Fu, null, "Address"),
                          r.a.createElement(
                            _u,
                            null,
                            "recieve alert for only one address"
                          )
                        ),
                        r.a.createElement(
                          Hu,
                          {
                            onClick: function () {
                              return Q("PARAMETERS");
                            },
                            onMouseOver: function () {
                              return Y("networkAddress");
                            },
                            onMouseOut: function () {
                              return q("networkAddress");
                            },
                          },
                          r.a.createElement("img", { alt: "", src: I }),
                          r.a.createElement(Fu, null, "Network"),
                          r.a.createElement(
                            _u,
                            null,
                            "recieve alert for deployment on a network"
                          )
                        ),
                        r.a.createElement(
                          Hu,
                          {
                            onClick: function () {
                              return Q("PARAMETERS");
                            },
                            onMouseOver: function () {
                              return Y("tagAddress");
                            },
                            onMouseOut: function () {
                              return q("tagAddress");
                            },
                          },
                          r.a.createElement("img", { alt: "", src: G }),
                          r.a.createElement(Fu, null, "Tag"),
                          r.a.createElement(
                            _u,
                            null,
                            "Recieve alert for every address"
                          )
                        )
                      )
                  ),
                  r.a.createElement(
                    Gu,
                    null,
                    "PARAMETERS" === W ||
                      "ALERT_TARGET" === W ||
                      "ALERT_TYPE" === W
                      ? r.a.createElement($u, null, "3")
                      : r.a.createElement(Yu, { src: "/images/tick-icon.svg" }),
                    r.a.createElement(
                      Qu,
                      null,
                      r.a.createElement(Ku, null, "Parameters"),
                      r.a.createElement(
                        Uu,
                        null,
                        "Set alert trigger Parameters"
                      )
                    )
                  ),
                  r.a.createElement(
                    qu,
                    null,
                    r.a.createElement(Zu, null),
                    "PARAMETERS" === W &&
                      r.a.createElement(
                        Ju,
                        { style: { flexDirection: "column" } },
                        r.a.createElement(
                          ef,
                          null,
                          r.a.createElement(
                            tf,
                            null,
                            r.a.createElement(
                              "option",
                              { value: "filter" },
                              "Filter by event name"
                            )
                          )
                        ),
                        r.a.createElement(
                          Mu,
                          {
                            onClick: function () {
                              return Q("DESTINATION");
                            },
                          },
                          "Next"
                        )
                      )
                  ),
                  r.a.createElement(
                    Gu,
                    null,
                    r.a.createElement($u, null, "4"),
                    r.a.createElement(
                      Qu,
                      null,
                      r.a.createElement(Ku, null, "Destination"),
                      r.a.createElement(
                        Uu,
                        { style: {} },
                        "Select the destination in which alert notification will be sent to."
                      ),
                      "DESTINATION" === W &&
                        r.a.createElement(
                          ku,
                          null,
                          r.a.createElement(
                            Cu,
                            null,
                            r.a.createElement(
                              Su,
                              null,
                              r.a.createElement(nf, {
                                alt: "",
                                src: "/images/email.svg",
                              }),
                              "Email",
                              r.a.createElement(Ru, null, "it@supportteam.com")
                            ),
                            r.a.createElement(
                              Ou,
                              null,
                              r.a.createElement(
                                "label",
                                { class: "switch" },
                                r.a.createElement("input", {
                                  type: "checkbox",
                                }),
                                r.a.createElement("span", {
                                  class: "slider round",
                                })
                              )
                            )
                          ),
                          r.a.createElement(
                            Cu,
                            null,
                            r.a.createElement(
                              Su,
                              null,
                              r.a.createElement(nf, {
                                alt: "",
                                src: "/images/webhook.svg",
                              }),
                              "Finance",
                              r.a.createElement(
                                Ru,
                                null,
                                "https://webhook.site/a0e"
                              )
                            ),
                            r.a.createElement(
                              Ou,
                              null,
                              r.a.createElement(
                                "label",
                                { class: "switch" },
                                r.a.createElement("input", {
                                  type: "checkbox",
                                }),
                                r.a.createElement("span", {
                                  class: "slider round",
                                })
                              )
                            )
                          ),
                          r.a.createElement(
                            zu,
                            null,
                            r.a.createElement(
                              Tu,
                              null,
                              r.a.createElement("img", {
                                alt: "",
                                src: "/images/slack.svg",
                                style: {
                                  marginRight: "0.25rem",
                                  width: "1.3rem",
                                },
                              }),
                              " ",
                              "Slack"
                            ),
                            r.a.createElement(
                              Tu,
                              null,
                              r.a.createElement("img", {
                                alt: "",
                                src: "/images/webhook.svg",
                                style: {
                                  marginRight: "0.25rem",
                                  width: "1.3rem",
                                },
                              }),
                              "Webhook"
                            ),
                            r.a.createElement(
                              Tu,
                              null,
                              r.a.createElement("img", {
                                alt: "",
                                src: "/images/email.svg",
                                style: {
                                  marginRight: "0.25rem",
                                  width: "1.3rem",
                                },
                              }),
                              "Email"
                            )
                          )
                        )
                    )
                  ),
                  r.a.createElement(Zu, null),
                  r.a.createElement(
                    Gu,
                    null,
                    r.a.createElement(
                      Du,
                      null,
                      r.a.createElement(
                        Mu,
                        {
                          onClick: function () {
                            return Q("Rules");
                          },
                          style: { marginLeft: "0px" },
                        },
                        "Done"
                      ),
                      r.a.createElement(
                        Nu,
                        {
                          onClick: function () {
                            return Q("ALERT_TYPE");
                          },
                        },
                        "Cancel"
                      )
                    )
                  )
                ),
              "History" === t && r.a.createElement(ks, null),
              "Destination" === t && r.a.createElement(Hs, null)
            )
          )
        );
      }
      var pu,
        uu,
        fu,
        gu,
        xu,
        bu,
        hu,
        Eu,
        wu,
        vu,
        Au,
        yu,
        ju,
        Ou = E.a.div(Ep || (Ep = Object(h.a)([""]))),
        ku = E.a.div(
          wp ||
            (wp = Object(h.a)([
              "\n  margin-bottom: 10px;\n  padding: 20px 0 0 0;\n",
            ]))
        ),
        Cu = E.a.div(
          vp ||
            (vp = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  background: #f5f6fd 0% 0% no-repeat padding-box;\n  border: 1px solid #d5e0ff;\n  border-radius: 6px;\n  display: flex;\n  height: 66px;\n  padding: 14px;\n  width: 100%;\n  // max-width: 453px;\n",
            ]))
        ),
        Tu = E.a.div(
          Ap ||
            (Ap = Object(h.a)([
              "\n  width: 6rem;\n  height: 2.5rem;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #416be0;\n  border-radius: 0.375rem;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  color: #1d3c93;\n  font-size: 0.875rem;\n  cursor: pointer;\n  @media (min-width: 300px) and (max-width: 768px) {\n  }\n",
            ]))
        ),
        zu = E.a.div(
          yp ||
            (yp = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  text-align: center;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 21.25rem;\n  margin-bottom: 1.25rem;\n  padding-top: 1rem;\n\n  @media (min-width: 300px) and (max-width: 768px) {\n    max-width: 19.25rem;\n  }\n",
            ]))
        ),
        Su = E.a.div(
          jp ||
            (jp = Object(h.a)(["\n  font-weight: 600;\n  font-size: 1rem;\n"]))
        ),
        Ru = E.a.div(Op || (Op = Object(h.a)(["\n  font-size: 0.9rem;\n"]))),
        Du = E.a.div(
          kp ||
            (kp = Object(h.a)([
              "\n  display: flex;\n  justify-content: start;\n  width: 100%;\n  padding : 20px 0 10px 0;\n  max-width: 503px;\n",
            ]))
        ),
        Nu = E.a.div(
          Cp ||
            (Cp = Object(h.a)([
              "\n  top: 432px;\n  left: 1179px;\n  width: 72px;\n  height: 34px;\n  border: 1px solid #3163f0;\n  opacity: 1;\n  padding-top: 6px;\n  border-radius: 3px;\n  font-size: 14px;\n  text-align: center;\n  cursor: pointer;\n  margin-left: -5px;\n  margin-right: -11px;\n\n  color: #3163f0;\n",
            ]))
        ),
        Mu = E.a.div(
          Tp ||
            (Tp = Object(h.a)([
              "\n  width: 68px;\n  height: 34px;\n  background: #3163f0 0% 0% no-repeat padding-box;\n  border-radius: 3px;\n  color: #ffffff;\n  padding-top: 6px;\n  font-size: 14px;\n  margin-right: 15px;\n  margin-left : 16px;\n  text-align: center;\n  cursor: pointer;\n",
            ]))
        ),
        Fu = E.a.div(
          zp ||
            (zp = Object(h.a)([
              "\n  font-size: 0.775rem;\n  font-weight: 600;\n  // color: #1d3c93;\n  width: 100%;\n  max-width: 16.25rem;\n  padding-top: 10px;\n  &:hover {\n    color: white;\n  }\n",
            ]))
        ),
        _u = E.a.div(
          Sp ||
            (Sp = Object(h.a)([
              "\n  font-size: 0.775rem;\n  // color: #1d3c93;\n  width: 100%;\n  /* min-width: 100% */\n  max-width: 16.25rem;\n  padding-top: 5px;\n",
            ]))
        ),
        Bu = E.a.div(
          Rp ||
            (Rp = Object(h.a)([
              "\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 0.375rem;\n  width: 100%;\n  background-color: #ffffff;\n  height: auto;\n  padding: 0.5rem;\n  overflow: auto;\n",
            ]))
        ),
        Lu = E.a.div(
          Dp ||
            (Dp = Object(h.a)([
              "\n  background: #ecf0f7 0% 0% no-repeat padding-box;\n  opacity: 1;\n  width: 100%;\n  padding: 2.5rem;\n  height: 100%;\n  @media (min-width: 300px) and (max-width: 768px) {\n    padding: 2.5rem 1.5rem 1.5rem 1.5rem;\n  }\n",
            ]))
        ),
        Iu = E.a.div(
          Np ||
            (Np = Object(h.a)(["\n  font-size: 16px;\n  font-weight: 600;\n"]))
        ),
        Pu = E.a.div(
          Mp ||
            (Mp = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 75rem;\n  margin-bottom: 1.25rem;\n",
            ]))
        ),
        Xu = E.a.div(
          Fp ||
            (Fp = Object(h.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 21.875rem;\n  cursor: pointer;\n  // margin: 25px 0px 10px 17px;\n",
            ]))
        ),
        Vu = E.a.div(
          _p ||
            (_p = Object(h.a)([
              "\n  // padding: 0.313rem 0.5rem 0.313rem 0.5rem;\n  @media (min-width: 340px) and (max-width: 768px) {\n    padding: 1px;\n  }\n",
            ]))
        ),
        Gu = E.a.div(
          Bp ||
            (Bp = Object(h.a)([
              "\n  display: flex;\n  width: 100%;\n  padding: 0px 10px 0px 0px;\n",
            ]))
        ),
        Ku = E.a.div(
          Lp ||
            (Lp = Object(h.a)([
              "\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: left;\n",
            ]))
        ),
        Uu = E.a.div(
          Ip ||
            (Ip = Object(h.a)([
              "\n  font-size: 0.875rem;\n  color: #7c828a;\n  @media (min-width: 300px) and (max-width: 768px) {\n    overflow: auto;\n  }\n",
            ]))
        ),
        Hu = E.a.div(
          Pp ||
            (Pp = Object(h.a)([
              "\n  padding: 0.625rem;\n\n  height: 150px;\n  margin: 0px 10px 20px 10px;\n  width: 215px;\n  background: #f5f6fd;\n  border: solid #d5e0ff;\n  outline: none;\n  background: #f5f6fd 0% 0% no-repeat padding-box;\n  border: 1px solid #d5e0ff;\n  border-radius: 6px;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  cursor: pointer;\n  &:hover {\n    background-color: #3163f0;\n    color: white;\n  }\n  @media (min-width: 340px) and (max-width: 768px) {\n    margin: 0px 10px 20px 2px;\n  }\n",
            ]))
        ),
        Wu = E.a.div(
          Xp ||
            (Xp = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row wrap;\n  margin-left: 16px;\n  /* min-height : 30px; */\n  padding: 15px 0px 15px 0px;\n  // justify-content: space-between;\n  @media (min-width: 340px) and (max-width: 768px) {\n    padding-left: 20px;\n  }\n",
            ]))
        ),
        Ju = E.a.div(
          Vp ||
            (Vp = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row wrap;\n  width: 100%;\n  padding-top: 28px;\n  margin-left: 16px;\n",
            ]))
        ),
        Qu = E.a.div(
          Gp ||
            (Gp = Object(h.a)(["\n  flex-flow: row;\n  margin-left: 16px;\n"]))
        ),
        Yu = E.a.img(
          Kp || (Kp = Object(h.a)(["\n  width: 30px;\n  height: 30px;\n"]))
        ),
        qu = E.a.div(
          Up ||
            (Up = Object(h.a)(["\n  display: flex;\n  min-height: 25px;\n"]))
        ),
        Zu = E.a.div(
          Hp ||
            (Hp = Object(h.a)([
              "\n  width: 2px;\n  background-color: #3163f0;\n  margin-left: 15px;\n",
            ]))
        ),
        $u = E.a.div(
          Wp ||
            (Wp = Object(h.a)([
              "\n  margin-top: 5px;\n  width: 30px;\n  min-width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid #3163f0;\n  padding: 0px 0px 0px 8px;\n",
            ]))
        ),
        ef = E.a.div(
          Jp ||
            (Jp = Object(h.a)([
              "\n  margin: 0px 0px 5px 20px;\n  width: 100%;\n  padding: 10px 50px 10px 0;\n",
            ]))
        ),
        nf = E.a.img(
          Qp ||
            (Qp = Object(h.a)(["\n  width: 1.3rem;\n  margin-right: 4px;\n"]))
        ),
        tf = E.a.select(
          Yp ||
            (Yp = Object(h.a)([
              "\n  outline: none;\n  border: none;\n  background-color: #f5f6fd;\n  border-radius: 3px;\n  width: 100%;\n  padding: 0px 10px 0px 10px;\n  font-size: 12px;\n  height: 40px;\n  color: #a6aabf;\n",
            ]))
        );
      function af() {
        return r.a.createElement(
          df,
          null,
          r.a.createElement(
            mf,
            null,
            r.a.createElement(
              S.Row,
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                },
              },
              r.a.createElement(
                "div",
                null,
                r.a.createElement("img", {
                  alt: "",
                  src: "/images/back.svg",
                  style: { marginRight: "10px" },
                  onClick: function () {
                    x.push("/dashboard/Alerting");
                  },
                }),
                r.a.createElement("b", null, "Alert Details")
              ),
              r.a.createElement(uf, null, "Add Alert")
            ),
            r.a.createElement(
              ff,
              null,
              r.a.createElement(
                gf,
                null,
                r.a.createElement(
                  sf,
                  null,
                  r.a.createElement(xf, null, "ID"),
                  r.a.createElement(bf, null, "45fej-46de-41d3-b23a-fhf783")
                )
              ),
              r.a.createElement(
                gf,
                null,
                r.a.createElement(
                  sf,
                  null,
                  r.a.createElement(xf, null, "Name"),
                  r.a.createElement(
                    bf,
                    null,
                    "Sucessfull transaction in App_Transactions_Validator"
                  )
                )
              ),
              r.a.createElement(
                gf,
                null,
                r.a.createElement(
                  sf,
                  null,
                  r.a.createElement(xf, null, "Alert Type"),
                  r.a.createElement(
                    bf,
                    null,
                    r.a.createElement(vf, null, "Sucessfull transaction")
                  )
                )
              ),
              r.a.createElement(
                gf,
                null,
                r.a.createElement(
                  sf,
                  null,
                  r.a.createElement(xf, null, "Target"),
                  r.a.createElement(bf, null, "App_Transactions_Validator")
                )
              )
            ),
            r.a.createElement("br", null),
            r.a.createElement(
              "b",
              null,
              "Alert will be sent to this destination"
            ),
            r.a.createElement(
              pf,
              null,
              r.a.createElement(
                gf,
                null,
                r.a.createElement(
                  S.Row,
                  null,
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/email.svg",
                    style: { marginRight: "4px", width: "1rem" },
                  }),
                  r.a.createElement(xf, null, "Email "),
                  r.a.createElement(bf, null, "it@supportteam.com")
                )
              ),
              r.a.createElement(
                gf,
                null,
                r.a.createElement(
                  S.Row,
                  null,
                  r.a.createElement("img", {
                    alt: "",
                    src: "/images/webhook.svg",
                    style: { marginRight: "4px", width: "1rem" },
                  }),
                  r.a.createElement(xf, null, "Finance"),
                  r.a.createElement(bf, null, "https:webhook.site/aOe")
                )
              ),
              r.a.createElement(
                hf,
                null,
                r.a.createElement(
                  Ef,
                  { style: { marginRight: "4px" } },
                  "Edit"
                ),
                r.a.createElement(
                  wf,
                  { style: { marginLeft: "4px" } },
                  "Disable"
                )
              )
            )
          )
        );
      }
      var rf,
        lf,
        of,
        cf,
        df = E.a.div(
          pu ||
            (pu = Object(h.a)([
              "\n  display: flex;\n  @media (min-width: 300px) and (max-width: 768px) {\n    overflow: auto;\n  }\n",
            ]))
        ),
        mf = E.a.div(
          uu ||
            (uu = Object(h.a)([
              "\n  background: #ecf0f7 0% 0% no-repeat padding-box;\n  opacity: 1;\n  width: 100%;\n  padding: 3rem;\n  height: 100vh;\n  white-space: nowrap;\n",
            ]))
        ),
        sf = E.a.div(
          fu ||
            (fu = Object(h.a)([
              "\n  display: flex;\n  @media (min-width: 300px) and (max-width: 768px) {\n    column-gap: 80px;\n    text-align: left;\n  }\n",
            ]))
        ),
        pf = E.a.div(
          gu ||
            (gu = Object(h.a)([
              "\n  background-color: #ffffff;\n  border-radius: 6px;\n  width: 100%;\n  height: 10rem;\n  margin-top: 20px;\n  padding: 20px;\n",
            ]))
        ),
        uf = E.a.button(
          xu ||
            (xu = Object(h.a)([
              '\n  background-image: url("/images/Add.svg");\n  background-repeat: no-repeat;\n  background-position: 8px;\n  padding-left: 21px;\n  background-size: 14px;\n  position: relative;\n  background-color: #3163f0;\n  color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  width: 100px;\n  height: 30px;\n  font-size: 12px;\n',
            ]))
        ),
        ff = E.a.div(
          bu ||
            (bu = Object(h.a)([
              "\n  background-color: #ffffff;\n  border-radius: 6px;\n  width: 100%;\n  height: 12rem;\n  margin-top: 20px;\n  padding: 12px;\n  @media (min-width: 300px) and (max-width: 768px) {\n   background-color: #ffffff;\n    border-radius: 6px;\n    height: 180px;\n    height: auto;\n    /* margin-top: 20px; */\n    padding: 8px;\n    overflow: auto;\n}\n  }\n",
            ]))
        ),
        gf = E.a.div(
          hu ||
            (hu = Object(h.a)([
              "\n  border-bottom: 0.5px #c9d1cb solid;\n  padding: 8px;\n",
            ]))
        ),
        xf = E.a.div(
          Eu ||
            (Eu = Object(h.a)([
              "\n  text-align: left;\n  font: normal normal 600 14px/17px Inter;\n  letter-spacing: 0px;\n  color: #102c78;\n  opacity: 1;\n  width: 100%;\n  max-width: 260px;\n",
            ]))
        ),
        bf = E.a.div(
          wu ||
            (wu = Object(h.a)([
              "\n  font-size: 13px;\n  @media (min-width: 300px) and (max-width: 768px) {\n  \n    margin-left:5px;\n",
            ]))
        ),
        hf = E.a.div(
          vu ||
            (vu = Object(h.a)([
              "\n  display: flex;\n  flex-flow: row nowrap;\n  text-align: center;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 160px;\n  padding-top: 10px;\n",
            ]))
        ),
        Ef = E.a.div(
          Au ||
            (Au = Object(h.a)([
              "\n  top: 548px;\n  left: 341px;\n  width: 79px;\n  height: 34px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  background: #3163f0 0% 0% no-repeat padding-box;\n  border-radius: 4px;\n  opacity: 1;\n  text-align: left;\n  font: normal normal medium 16px/20px Inter;\n  letter-spacing: 0px;\n  color: #ffffff;\n  font-size: 14px;\n",
            ]))
        ),
        wf = E.a.div(
          yu ||
            (yu = Object(h.a)([
              "\n  top: 548px;\n  left: 341px;\n  width: 79px;\n  height: 34px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #416be0;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  border-radius: 4px;\n  text-align: left;\n  font: normal normal medium 16px/20px Inter;\n  letter-spacing: 0px;\n  color: #3163f0;\n  opacity: 1;\n  font-size: 14px;\n",
            ]))
        ),
        vf = E.a.div(
          ju ||
            (ju = Object(h.a)([
              "\n  text-align: left;\n  font: normal normal medium 14px/17px Inter;\n  letter-spacing: 0px;\n  color: #416be0;\n  opacity: 1;\n",
            ]))
        ),
        Af = E.a.div(
          rf || (rf = Object(h.a)(["\n  height: 100%;\n  width: 100%;\n"]))
        ),
        yf = function (e) {
          return r.a.createElement(
            Af,
            null,
            A.isMenuActive("/contract") &&
              (A.isMenuActive("/contract-details")
                ? r.a.createElement(Ct, null)
                : r.a.createElement(Ka, null)),
            A.isMenuActive("/transaction") &&
              (A.isMenuActive("/transaction-details")
                ? r.a.createElement(_l, null)
                : r.a.createElement(ko, null)),
            A.isMenuActive("/analytics") && r.a.createElement(Am, null),
            A.isMenuActive("/about") && r.a.createElement($m, null),
            A.isMenuActive("/rules") && r.a.createElement(hp, null),
            A.isMenuActive("/add-alert") && r.a.createElement(su, null),
            A.isMenuActive("/alert-detail") && r.a.createElement(af, null),
            A.isMenuActive("/network") && r.a.createElement(wc, null)
          );
        },
        jf = E.a.div(
          lf ||
            (lf = Object(h.a)([
              "\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  /* overflow-y: hidden;\n  overflow-x: hidden; */\n  height: 100vh;\n",
            ]))
        ),
        Of = E.a.div(
          of ||
            (of = Object(h.a)([
              "\n  height: 100%;\n  width: 100%;\n  display: flex;\n  overflow-y: hidden;\n  overflow-x: hidden;\n",
            ]))
        ),
        kf = E.a.div(
          cf ||
            (cf = Object(h.a)([
              "\n  height: 100%;\n  width: 100%;\n  display: flex;\n  overflow: auto;\n",
            ]))
        ),
        Cf = function (e) {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              jf,
              null,
              r.a.createElement(V, e),
              r.a.createElement(
                Of,
                null,
                r.a.createElement(W, e),
                r.a.createElement(oe, e),
                r.a.createElement(kf, null, r.a.createElement(yf, e))
              )
            )
          );
        },
        Tf = t(686),
        zf = (function (e) {
          Object(d.a)(t, e);
          var n = Object(m.a)(t);
          function t() {
            var e;
            Object(o.a)(this, t);
            for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++)
              l[i] = arguments[i];
            return (
              ((e = n.call.apply(
                n,
                [this].concat(l)
              )).getPublicRoutes = function () {
                return r.a.createElement(
                  s.d,
                  null,
                  r.a.createElement(s.a, { exact: !0, from: "*", to: "/" })
                );
              }),
              (e.getPrivateRoutes = function () {
                return r.a.createElement(
                  s.d,
                  null,
                  r.a.createElement(s.a, {
                    exact: !0,
                    from: "/",
                    to: "/dashboard/about",
                  }),
                  r.a.createElement(s.b, {
                    exact: !0,
                    path: "/dashboard",
                    component: Cf,
                  }),
                  r.a.createElement(s.b, {
                    exact: !0,
                    path: "/dashboard/:menu",
                    component: Cf,
                  }),
                  r.a.createElement(s.b, {
                    exact: !0,
                    path: "/dashboard/:menu/:subMenu",
                    component: Cf,
                  }),
                  r.a.createElement(s.a, { exact: !0, from: "*", to: "/" })
                );
              }),
              e
            );
          }
          return (
            Object(c.a)(t, [
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    u.a,
                    { muiTheme: Object(Tf.a)() },
                    r.a.createElement(
                      s.c,
                      { history: x },
                      this.getPrivateRoutes()
                    )
                  );
                },
              },
            ]),
            t
          );
        })(b),
        Sf = Object(f.b)(function (e) {
          return { user: e.user };
        })(zf),
        Rf = t(130),
        Df = t(351),
        Nf = t(350),
        Mf = {
          isLoggedIn: !1,
          loginFailure: null,
          deviceId: null,
          sessionToken: null,
          loading: !1,
          isForgotPasswordSuccess: !1,
        };
      var Ff = Object(Rf.b)({
          user: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Mf,
              n = arguments.length > 1 ? arguments[1] : void 0;
            return n.type, e;
          },
        }),
        _f = Object(Nf.createLogger)(),
        Bf = Object(Rf.c)(Ff, Object(Rf.a)(Df.a, _f)),
        Lf = t(216);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      function If() {
        return r.a.createElement(
          Lf.a,
          null,
          r.a.createElement(
            f.a,
            { store: Bf },
            r.a.createElement(Sf, { component: Sf })
          )
        );
      }
      i.a.render(r.a.createElement(If, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[381, 1, 2]],
]);
//# sourceMappingURL=main.d6c951c1.chunk.js.map
