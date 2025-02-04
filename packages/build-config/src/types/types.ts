
export type BuildPaths = {
	src: string;
	html: string;
	entry: string;
	output: string;
	public: string;
};
export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'mobile' | 'desktop';
export type BuildOptions = {
	port: number;
	paths: BuildPaths;
	mode: BuildMode;
	analyzer?: boolean;
	platform: BuildPlatform;
};