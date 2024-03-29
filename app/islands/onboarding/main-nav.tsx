export default function MainNav() {
  return (
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand page-scroll" href="/">
            ぎーじゅく@渋谷、新宿のシェアハウス
          </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a class="page-scroll" href="#about">
                このギークハウスについて
              </a>
            </li>
            <li>
              <a class="page-scroll" href="#map">
                所在地
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
