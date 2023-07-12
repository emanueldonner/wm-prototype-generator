<script>
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import PageHeader from '../components/PageHeader.svelte';
	import PageFooter from '../components/PageFooter.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import ConfigSidebar from '../components/ConfigSidebar/ConfigSidebar.svelte';
	import { componentList } from '../constants/componentList';

	import { showConfigSidebar } from '../stores';

	import.meta.glob('./src/constants/components/**/styles/*.melange.tokens.css');
	import.meta.glob('./src/constants/components/**/styles/*.nojs.css');
	import.meta.glob('./src/constants/components/**/styles/*.lightdom.css');
	import.meta.glob('./src/constants/components/**/*.js');
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
</script>

<!-- {#each componentList as component}
	<script
		type="module"
		src={`./wiener-melange/assets/js/components/${component.title}/${component.title}.js`}
	></script>
{/each} -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="bg-surface-100-800-token">
			<svelte:fragment slot="lead">Prototyp Generator</svelte:fragment>

			<svelte:fragment slot="trail">v0.0.3</svelte:fragment>
		</AppBar>
		<!-- <LightSwitch /> -->
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden md:block md:w-96 lg:h-full bg-slate-200">
			<Sidebar />
		</div>
	</svelte:fragment> -->
	<svelte:fragment slot="sidebarRight">
		{#if $showConfigSidebar}
			<div class="hidden md:block md:w-96 lg:h-full bg-slate-200">
				<ConfigSidebar />
			</div>
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<PageHeader />
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<PageFooter />
	</svelte:fragment>
	<!-- (footer) -->
	<!-- (footer) -->
	<!-- (footer) -->
	<!-- (footer) -->
	<!-- (footer) -->
	<script src="./wiener-melange/assets/js/bundle.js"></script>
</AppShell>
