
import path from 'path';
import webpack from 'webpack';
import { BuildMode, BuildPaths, BuildOptions, BuildPlatform } from '@packages/build-config';
import { buildWebpack } from '@packages/build-config';
import packageJson from './package.json';


type EnvVariables = {
	port?: number;
	mode?: BuildMode;
	analyzer?: boolean;
	platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
	const paths: BuildPaths = {
		src: path.resolve(__dirname, 'src'),
		output: path.resolve(__dirname, 'build'),
		public: path.resolve(__dirname, 'public'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	}

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3001,
		mode: env.mode ?? 'development',
		paths,
		analyzer: env.analyzer,
		platform: env.platform ?? 'desktop',
	});

	config.plugins.push(new webpack.container.ModuleFederationPlugin({
		name: 'shop',
		filename: 'remoteEntry.js',
		exposes: {
			'./Router': './src/Router/Router.tsx',
		}, shared: {
			...packageJson.dependencies,
			react: {
				eager: true,
				requiredVersion: packageJson.dependencies['react'],
			},
			'react-router-dom': {
				eager: true,
				requiredVersion: packageJson.dependencies['react-router-dom'],
			},
			'react-dom': {
				eager: true,
				requiredVersion: packageJson.dependencies['react-dom'],

			}
		}
	}));
	return config;


}
