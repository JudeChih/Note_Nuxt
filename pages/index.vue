<template>
<div>
<div class="header">
	<div class="header_wrap">
		<div class="logo" @click="goToTop()">
			<img src="../assets/image/nuxt-square.svg" alt="logo">
		</div>
		<el-dropdown>
			<span class="el-dropdown-link">
			下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item @click.native="scrollToPage(0)">首頁</el-dropdown-item>
				<el-dropdown-item @click.native="scrollToPage(1)">ch0 前言</el-dropdown-item>
				<el-dropdown-item @click.native="scrollToPage(2)">ch1 什麼是SSR?</el-dropdown-item>
				<el-dropdown-item @click.native="scrollToPage(3)">ch2 首頁</el-dropdown-item>
				<el-dropdown-item @click.native="scrollToPage(4)">ch3 前言</el-dropdown-item>
				<el-dropdown-item @click.native="scrollToPage(5)">ch4 什麼是SSR?</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</div>
<div class="container">
	<div class="first_page">
		<logo />
		<h1 class="title"><span>NUXT</span><span>JS</span></h1>
		<h2 class="subtitle">研究手冊</h2>
	</div>
	<div class="page">
		<div class="ch_wrap">
			<div class="code"></div>
			<div class="name">前言</div>
		</div>
		<div class="content_wrap">
			<div>
				<p>讓我們一起來了解 Vue.js SPA 專案如何加上 SSR、如何調整部署流程、並且有哪些適用情境與推薦模組，在這之前我們先來認識Nuxt.js以及SSR。</p>
			</div>
		</div>
	</div>
	<div class="page">
		<div class="ch_wrap">
			<div class="code"></div>
			<div class="name">認識Nuxt.js</div>
		</div>
		<div class="content_wrap">
			<div class="title">什麼是Nuxt.js？</div>
			<div class="content">
				<p>Nuxt.js 是一個基於Vue.js 的通用應用框架。</p>
				<p>我們的目標是創建一個靈活的應用框架，你可以基於它初始化新項目的基礎結構代碼，或者在已有Node.js 項目中使用Nuxt.js。</p>
				<p>而Nuxt.js預設了利用Vue.js開發服務端渲染的應用所需要的各種配置。</p>
				<p>除此之外，我們還提供了一種命令叫：<code>nuxt generate</code>，這指令可以將你開發的網站輸出靜態檔案</p>
			</div>
			<div class="title">Nuxt.js框架是如何運作的？</div>
			<div class="content">
				<p>Nuxt.js集合了以下組件/功能，用於開發完整而強大的Web應用：</p>
				<ul>
					<li>Vue2</li>
					<li>Vue-Router</li>
					<li>Vuex(需要配置才會引入)</li>
					<li>Vue 服務器端渲染(排除使用<code>mode:'spa'</code>)</li>
					<li>Vue-Meta</li>
				</ul>
				<p>另外，Nuxt.js使用Webpack、vue-loader和babel-loader來處理代碼的自動化構建工作(如打包、代碼分層、壓縮等等)。</p>
			</div>
		</div>
	</div>
	<div class="page">
		<div class="ch_wrap">
			<div class="code"></div>
			<div class="name">認識SSR</div>
		</div>
		<div class="content_wrap">
			<div class="title">SSR是什麼？</div>
			<div class="content">
				<p>其全名是Server-Side Rendering，頁面由後端渲染，HTML由後端產生。</p>
				<p>像是我們熟悉的php產生的html就會有blade。</p>
			</div>
			<div class="title">為了什麼使用SSR？</div>
			<div class="content">
				<p>為了提高效能並增加互動性，前端框架開始幫忙分擔後端渲染的重任，這時頁面初始值可能透過後端View塞，漸漸將渲染放到前端，後續操作透過API。</p>
				<p>為了方便維護，後端完全API化就為了切開畫面與資料邏輯，渲染完全靠前端，演變成現今熟悉的SPA，純粹Client-Side Rendering</p>
			</div>
			<div class="title">會遇到些什麼問題？</div>
			<div class="content">
				<p>移到前端渲染，跟著出現新的問題</p>
				<ul>
					<li>SEO (Search Engine Optimization)</li>
					<li>SMO (Social Media Optimization)</li>
					<li>起始延遲 (Initial Latency) / 起始讀取時間 (Initial Load Time)</li>
				</ul>
				<p>畢竟得等 js 讀完跑完，抓完API再渲染完</p>
				<p>就算你透過JS修改head，增加額外資訊，問題是爬蟲不跑JS，看不到你改的meta或其他對應SNS的HTML Tag。</p>
			</div>
		</div>
	</div>
	<div class="page">
		<div class="ch_wrap">
			<div class="code"></div>
			<div class="name">前言</div>
		</div>
		<div class="content_wrap">
			<div class="title">Nuxt.js是什麼？</div>
			<div class="content">

			</div>
		</div>
	</div>
	<div class="page">
		<div class="ch_wrap">
			<div class="code"></div>
			<div class="name">什麼是SSR？</div>
		</div>
		<div class="content_wrap">
			<div class="title">Nuxt.js是什麼？</div>
			<div class="content">

			</div>
		</div>
	</div>
	<div class="page">
		<div class="ch_wrap">
			<div class="code"></div>
			<div class="name">什麼是SSR？</div>
		</div>
		<div class="content_wrap">
			<div class="title">Nuxt.js是什麼？</div>
			<div class="content">

			</div>
		</div>
	</div>
</div>
<div class="footer">
	<span class="f_content">Copyright © <span class="f_name">Toby</span> Reserved</span>
</div>
</div>

</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
	scrollToTop: true,
	components: {
		Logo
	},
	data() {
        return {
			url_show_block:'',
		}
	},
	created: function() {// 生命週期順位 1

	},
	mounted: function() {// 生命週期順位 2
		$('.page').each(function(){
			var id = 'page'+$(this).index();
			$(this).prop('id',id);
			var chapter = 'chapter ' + ($(this).index()-1);
			$(this).find('.code').text(chapter)
		})
	},
	computed: {// 屬性變更才動作

	},
    methods: {
		// 移動到某章節
		scrollToPage:function(index){
			let self = this;
			var id = '#page'+index;
			var pageScrollTop = $(id).scrollTop();
			console.log($(id).clientHeight)
			$('html,body').animate({ 'scrollTop': pageScrollTop }, 250);
		},
		// 回到最上面
		goToTop:function(){
			$('html,body').animate({ 'scrollTop': 0 }, 250);
		}
	},
	watch: {// 時刻監聽動作

	}
}
</script>
