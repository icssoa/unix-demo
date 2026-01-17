import { type PluginConfig } from "@/.cool";

export default {
	options: {
		// 支持的多语言代码列表，AI 将依据此列表生成对应的本地化文件
		languages: ["zh-cn", "zh-tw", "en", "es", "ja", "ko", "fr"]
	},

	install(app) {}
} as PluginConfig;
