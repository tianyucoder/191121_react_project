const { 
	override, 
	fixBabelImports,
	addLessLoader,
	addWebpackAlias
} = require('customize-cra');

const {resolve} = require("path");

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
  addLessLoader({
		javascriptEnabled: true,
		modifyVars: { '@primary-color': '#1DA57A' },
	}),
	addWebpackAlias({
		"@": resolve(__dirname, "src")
	})
);