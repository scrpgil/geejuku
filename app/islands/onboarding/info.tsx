import { Style, css } from "hono/css";
export default function Info() {
  return (
    <section class="geekhouse">
      <Style>{css`
        .geekhouse {
          padding: 1em 0;

          .row {
            padding: 16px 0;
          }

          h2 {
            margin-top: 0px;
          }

          .btn-twitter {
            border-color: #55acee;
            color: #fff;
            background-color: #55acee;
            -webkit-transition: all 0.35s;
            -moz-transition: all 0.35s;
            transition: all 0.35s;
          }

          .btn-twitter:hover,
          .btn-twitter:focus,
          .btn-twitter.focus,
          .btn-twitter:active,
          .btn-twitter.active,
          .open > .dropdown-toggle.btn-twitter {
            border-color: #55acee;
            color: #fff;
            background-color: #489fe1;
          }

          .btn-twitter:active,
          .btn-twitter.active,
          .open > .dropdown-toggle.btn-twitter {
            background-image: none;
          }

          .btn-twitter.disabled,
          .btn-twitter[disabled],
          fieldset[disabled] .btn-twitter,
          .btn-twitter.disabled:hover,
          .btn-twitter[disabled]:hover,
          fieldset[disabled] .btn-twitter:hover,
          .btn-twitter.disabled:focus,
          .btn-twitter[disabled]:focus,
          fieldset[disabled] .btn-twitter:focus,
          .btn-twitter.disabled.focus,
          .btn-twitter[disabled].focus,
          fieldset[disabled] .btn-twitter.focus,
          .btn-twitter.disabled:active,
          .btn-twitter[disabled]:active,
          fieldset[disabled] .btn-twitter:active,
          .btn-twitter.disabled.active,
          .btn-twitter[disabled].active,
          fieldset[disabled] .btn-twitter.active {
            border-color: #55acee;
            background-color: #55acee;
          }

          .btn-twitter .badge {
            color: #55acee;
            background-color: #fff;
          }

          .contact a,
          .contact a:hover,
          .contact a:visited {
            color: #fff;
            text-decoration: none;
          }

          .contact button {
            margin-bottom: 5px;
          }

          .btn-facebook {
            border-color: #3b5998;
            color: #fff;
            background-color: #3b5998;
            -webkit-transition: all 0.35s;
            -moz-transition: all 0.35s;
            transition: all 0.35s;
          }

          .btn-facebook:hover,
          .btn-facebook:focus,
          .btn-facebook.focus,
          .btn-facebook:active,
          .btn-facebook.active,
          .open > .dropdown-toggle.btn-facebook {
            border-color: #3b5998;
            color: #fff;
            background-color: #2e4c8b;
          }

          .btn-facebook:active,
          .btn-facebook.active,
          .open > .dropdown-toggle.btn-facebook {
            background-image: none;
          }

          .btn-facebook.disabled,
          .btn-facebook[disabled],
          fieldset[disabled] .btn-facebook,
          .btn-facebook.disabled:hover,
          .btn-facebook[disabled]:hover,
          fieldset[disabled] .btn-facebook:hover,
          .btn-facebook.disabled:focus,
          .btn-facebook[disabled]:focus,
          fieldset[disabled] .btn-facebook:focus,
          .btn-facebook.disabled.focus,
          .btn-facebook[disabled].focus,
          fieldset[disabled] .btn-facebook.focus,
          .btn-facebook.disabled:active,
          .btn-facebook[disabled]:active,
          fieldset[disabled] .btn-facebook:active,
          .btn-facebook.disabled.active,
          .btn-facebook[disabled].active,
          fieldset[disabled] .btn-facebook.active {
            border-color: #3b5998;
            background-color: #3b5998;
          }

          .btn-facebook .badge {
            color: #3b5998;
            background-color: #fff;
          }

          .btn-connpass {
            border-color: #c23123;
            color: #fff;
            background-color: #c23123;
            -webkit-transition: all 0.35s;
            -moz-transition: all 0.35s;
            transition: all 0.35s;
          }

          .btn-connpass:hover,
          .btn-connpass:focus,
          .btn-connpass.focus,
          .btn-connpass:active,
          .btn-connpass.active,
          .open > .dropdown-toggle.btn-connpass {
            border-color: #a32a1b;
            color: #fff;
            background-color: #a32a1b;
          }

          .btn-connpass:active,
          .btn-connpass.active,
          .open > .dropdown-toggle.btn-connpass {
            background-image: none;
          }

          .btn-connpass.disabled,
          .btn-connpass[disabled],
          fieldset[disabled] .btn-connpass,
          .btn-connpass.disabled:hover,
          .btn-connpass[disabled]:hover,
          fieldset[disabled] .btn-connpass:hover,
          .btn-connpass.disabled:focus,
          .btn-connpass[disabled]:focus,
          fieldset[disabled] .btn-connpass:focus,
          .btn-connpass.disabled.focus,
          .btn-connpass[disabled].focus,
          fieldset[disabled] .btn-connpass.focus,
          .btn-connpass.disabled:active,
          .btn-connpass[disabled]:active,
          fieldset[disabled] .btn-connpass:active,
          .btn-connpass.disabled.active,
          .btn-connpass[disabled].active,
          fieldset[disabled] .btn-connpass.active {
            border-color: #a32a1b;
            background-color: #a32a1b;
          }

          .btn-connpass .badge {
            color: #3b5998;
            background-color: #fff;
          }
        }
      `}</Style>
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-lg-offset-1 text-center">
            <img
              src="/static/assets/profile-uenu.jpg"
              alt="管理人うえぬ"
              class="img-circle"
              width="115"
              hegiht="115"
            />
            <div class="text-muted">うえぬ</div>
          </div>
          <div class="col-lg-6">
            <h2 class="h3">ぎーじゅく（ギークハウス新宿）</h2>
            <p>東京都渋谷区代々木, 日本 </p>
            <div class="row">
              <div class="col-xs-3 text-center">
                <i class="fa fa-3x fa-home"></i>
                <div class="text-muted">一軒家タイプ</div>
              </div>
              <div class="col-xs-3 text-center">
                <i class="fa fa-3x fa-share-alt"></i>
                <div class="text-muted">ドミトリー</div>
              </div>
              <div class="col-xs-3 text-center">
                <i class="fa fa-3x fa-users"></i>
                <div class="text-muted">住民 5人</div>
              </div>
              <div class="col-xs-3 text-center">
                <i class="fa fa-3x fa-bed"></i>
                <div class="text-muted">ゲスト 4</div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 text-center contact">
            <a href="mailto:geejuku@kemari.tokyo" target="_blank">
              <button type="button" class="btn btn-block btn-success">
                お問い合わせ
              </button>
            </a>
            <a href="https://twitter.com/geejuku" target="_blank">
              <button type="button" class="btn btn-block btn-twitter">
                Twitter
              </button>
            </a>
            <a href="https://www.facebook.com/geejuku/" target="_blank">
              <button type="button" class="btn btn-block btn-facebook">
                Facebook
              </button>
            </a>
            <a href="https://geejuku.connpass.com/" target="_blank">
              <button type="button" class="btn btn-block btn-connpass">
                イベント情報(connpass)
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
