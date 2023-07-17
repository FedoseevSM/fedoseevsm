( function() {
  SystemJS.config({
    defaultExtension: true,
    meta: {
      "*.css": {
        loader: "css",
      },
    },
    babelOptions: {
      react: true,
    },
    map: {
      "plugin-babel": "lib/systemjs/plugins/plugin-babel/plugin-babel.js",
      "systemjs-babel-build":
        "lib/systemjs/plugins/plugin-babel/systemjs-babel-browser.js",
      react: "lib/react/react.production.min.js",
      "react-dom": "lib/react/react-dom.production.min.js",
      css: "lib/systemjs/plugins/plugin-css/css.js",
      classnames: "lib/classnames/index.min.js",
      "react-router-dom": "lib/@remix-run/react-router-dom/react-router-dom.production.min.js",
      "react-router": "lib/@remix-run/react-router/react-router.production.min.js",
      "@remix-run/router": "lib/@remix-run/router/remix-run.router.min.js",
      "antd": "lib/antd/antd.min.js",
      "dayjs": "lib/dayjs/dayjs.min.js",
      "@ant-design/icons": "lib/@ant-design/icons/index.umd.min.js",
      "splitting": "lib/splitting/splitting.min.js",
      "react-dnd": "lib/react-dnd/ReactDnD.min.js",
      "react-dnd-html5-backend": "lib/react-dnd-html5-backend/ReactDnDHTML5Backend.min.js",
      "immutability-helper": "lib/immutability-helper/index.min.js"
    },
    transpiler: "plugin-babel",
  })
  SystemJS.config({
    map: {
      "@entities/screen": "src/entities/screen/index.js",
      "@shared/ui": "src/shared/ui/index.js",
      "@shared/lib/hooks": "src/shared/lib/hooks/index.js",
      "@shared/config": "src/shared/config/index.js",
      "@app": "src/app/index.js",
      "@features": "src/features/index.js",
      "@pages": "src/pages/index.js", 
      "@widgets": "src/widgets/index.js",
      "@widgets/body": "src/widgets/body/index.js",
      "@widgets/header": "src/widgets/header/index.js",
    }
  })
  SystemJS.import("src/main.jsx").then(function (module) {
    console.log("REACT START")
  })
})()