<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Switch } from '$lib/components/ui/switch';
	import * as Avatar from '$lib/components/ui/avatar';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Layers from '@lucide/svelte/icons/layers';
	import Zap from '@lucide/svelte/icons/zap';
	import Palette from '@lucide/svelte/icons/palette';
	import Box from '@lucide/svelte/icons/box';
	import Terminal from '@lucide/svelte/icons/terminal';
	import Github from '@lucide/svelte/icons/github';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Code from '@lucide/svelte/icons/code';
	import Cpu from '@lucide/svelte/icons/cpu';
	import Eye from '@lucide/svelte/icons/eye';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Check from '@lucide/svelte/icons/check';
	import Copy from '@lucide/svelte/icons/copy';
  import { getRandomMsg, getTags } from './data.remote';
  import type { RemoteQuery } from '@sveltejs/kit';

	let copied = $state(false);
	let showEffects = $state(true);

	var randomQuery = getRandomMsg()

	function copyCommand() {
		navigator.clipboard.writeText('bunx sv create --template minimal .');
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}

	const stackItems = [
		{
			name: 'SvelteKit',
			version: '2.x',
			description: 'Cybernetically enhanced web apps. File-based routing, SSR, and a compiler that turns your components into surgical DOM updates.',
			icon: Zap,
			color: 'text-amber'
		},
		{
			name: 'Tailwind CSS',
			version: '4.0',
			description: 'A new engine rewritten from scratch. Zero-config, lightning fast, CSS-native. The utility framework that won.',
			icon: Palette,
			color: 'text-copper'
		},
		{
			name: 'shadcn-svelte',
			version: 'latest',
			description: 'Beautifully designed components you copy into your project. Accessible, customizable, and yours to own forever.',
			icon: Box,
			color: 'text-terracotta'
		},
		{
			name: 'TypeScript',
			version: '5.x',
			description: 'Type safety without the ceremony. Catch errors before they happen, get autocomplete everywhere.',
			icon: Code,
			color: 'text-amber'
		}
	];
</script>

<svelte:head>
	<title>dabsstack — Build your stack, your way</title>
	<meta
		name="description"
		content="A modern web development stack built with SvelteKit, Tailwind CSS v4, and shadcn-svelte."
	/>
</svelte:head>

<div class="grain min-h-screen overflow-hidden">
	<!-- ========== NAV ========== -->
	<header
		class="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-background/60 backdrop-blur-2xl"
	>
		<nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
			<a
				href="/"
				class="group flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight"
				style="font-family: var(--font-display);"
			>
				<div
					class="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber to-terracotta"
				>
					<Layers class="size-4 text-primary-foreground" />
				</div>
				<span class="transition-colors group-hover:text-amber">dabs</span><span
					class="text-muted-foreground">stack</span
				>
			</a>

			<div class="flex items-center gap-2">
				<Tooltip.Root>
					<Tooltip.Trigger>
						<div class="flex items-center gap-2 rounded-full border border-white/[0.06] bg-secondary/50 px-3 py-1.5">
							<span class="text-xs text-muted-foreground">Effects</span>
							<Switch bind:checked={showEffects} />
						</div>
					</Tooltip.Trigger>
					<Tooltip.Content>Toggle visual effects</Tooltip.Content>
				</Tooltip.Root>
				<Button
					variant="ghost"
					size="sm"
					href="https://github.com/Georg97/dabsstack"
					target="_blank"
					class="text-muted-foreground hover:text-foreground"
				>
					<Github class="size-4" />
				</Button>
				<Button size="sm" class="bg-gradient-to-r from-amber to-copper text-primary-foreground hover:opacity-90 border-0">
					Get Started
					<ArrowRight class="ml-1 size-3.5" />
				</Button>
			</div>
		</nav>
	</header>

	<!-- ========== HERO ========== -->
	<section class="relative min-h-[92vh] flex items-center justify-center pt-16">
		<!-- Gradient orbs -->
		{#if showEffects}
			<div
				class="pointer-events-none absolute top-20 -left-32 size-[500px] rounded-full opacity-20 blur-[120px] animate-float-slower"
				style="background: radial-gradient(circle, var(--amber), transparent 70%);"
			></div>
			<div
				class="pointer-events-none absolute -right-20 bottom-40 size-[400px] rounded-full opacity-15 blur-[100px] animate-float-slow"
				style="background: radial-gradient(circle, var(--terracotta), transparent 70%);"
			></div>
			<div
				class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full opacity-[0.07] blur-[80px]"
				style="background: radial-gradient(circle, var(--copper), transparent 60%);"
			></div>
		{/if}

		<!-- Grid pattern -->
		{#if showEffects}
			<div
				class="pointer-events-none absolute inset-0 opacity-[0.03]"
				style="background-image: linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px); background-size: 60px 60px;"
			></div>
		{/if}

		<div class="relative mx-auto max-w-6xl px-6 lg:px-8">
			<div class="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
				<!-- Left: Text -->
				<div>
					<div class="animate-fade-up">
						<Badge
							class="mb-6 border-amber/20 bg-amber/10 text-amber hover:bg-amber/15"
						>
							<Sparkles class="mr-1 size-3" />
							Open Source Stack
						</Badge>
					</div>

					<h1
						class="animate-fade-up text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
						style="font-family: var(--font-display); animation-delay: 0.1s;"
					>
						Build your
						<br />
						<span
							class="bg-gradient-to-r from-amber via-copper to-terracotta bg-clip-text text-transparent"
							>stack</span
						>,<br />
						your
						<span class="italic text-muted-foreground">way</span>.
					</h1>
					<div>
						<h1>Server Side generated content with SvelteKit's new Remote Queries</h1>
						{#each await getTags() as tag}
							<h1>tag: {tag}</h1>
						{/each}

						<h1>Runtime execution of Remote Functions</h1>
						{#if randomQuery?.error}
							<h1>This Message had an error (errors are simulated randomly). You can handle errors in your UI.</h1>
						{:else if randomQuery?.loading}
							<h1>loading...</h1>
						{:else}
							<h1>{randomQuery?.current}</h1>
						{/if}
						<Button onclick={() => { randomQuery.refresh() }}>Get new Message</Button>
					</div>

					<p
						class="animate-fade-up mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
						style="animation-delay: 0.2s;"
					>
						A minimal, opinionated starting point for developers who want control.
						<span class="text-foreground">SvelteKit</span> for the framework.
						<span class="text-foreground">Tailwind</span> for styling.
						<span class="text-foreground">shadcn</span> for components. Nothing more.
					</p>

					<!-- CTA row -->
					<div
						class="animate-fade-up mt-9 flex flex-wrap items-center gap-3"
						style="animation-delay: 0.3s;"
					>
						<Button
							size="lg"
							class="bg-gradient-to-r from-amber via-copper to-terracotta text-primary-foreground border-0 hover:opacity-90 px-7 text-base"
						>
							Get Started
							<ArrowRight class="ml-1.5 size-4" />
						</Button>
						<Button
							variant="outline"
							size="lg"
							href="https://github.com/Georg97/dabsstack"
							target="_blank"
							class="border-white/10 hover:border-white/20 hover:bg-white/[0.04] text-base"
						>
							<Github class="mr-1.5 size-4" />
							Source Code
						</Button>
					</div>

					<!-- Install command -->
					<div class="animate-fade-up mt-8" style="animation-delay: 0.4s;">
						<button
							onclick={copyCommand}
							class="group flex w-full max-w-md items-center gap-3 rounded-xl border border-white/[0.06] bg-secondary/40 px-5 py-3.5 font-mono text-sm transition-all hover:border-amber/20 hover:bg-secondary/60 cursor-pointer"
						>
							<Terminal class="size-4 shrink-0 text-amber" />
							<code class="flex-1 text-left text-muted-foreground">
								<span class="text-amber/70">$</span> bunx sv create --template minimal .
							</code>
							{#if copied}
								<Check class="size-4 text-green-400 transition-all" />
							{:else}
								<Copy
									class="size-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100"
								/>
							{/if}
						</button>
					</div>
				</div>

				<!-- Right: Visual element — Bento preview -->
				<div
					class="animate-fade-up relative hidden lg:block"
					style="animation-delay: 0.3s;"
				>
					<div class="grid grid-cols-2 gap-3">
						<!-- Card 1: Component preview -->
						<Card.Card
							class="col-span-2 border-white/[0.06] bg-card/60 backdrop-blur-sm overflow-hidden"
						>
							<Card.CardHeader class="pb-3">
								<div class="flex items-center gap-2">
									<div class="size-2.5 rounded-full bg-terracotta"></div>
									<div class="size-2.5 rounded-full bg-amber"></div>
									<div class="size-2.5 rounded-full bg-green-500/60"></div>
									<span class="ml-2 text-xs text-muted-foreground font-mono">+page.svelte</span>
								</div>
							</Card.CardHeader>
							<Card.CardContent class="pb-4">
								<pre class="text-xs leading-relaxed text-muted-foreground"><code><span class="text-amber/80">&lt;script&gt;</span>
  <span class="text-copper">import</span> {'{'} Button {'}'} <span class="text-copper">from</span> <span class="text-green-400/70">'$lib/ui/button'</span>;
  <span class="text-copper">import</span> {'{'} Card {'}'} <span class="text-copper">from</span> <span class="text-green-400/70">'$lib/ui/card'</span>;
<span class="text-amber/80">&lt;/script&gt;</span>

<span class="text-amber/80">&lt;Card&gt;</span>
  <span class="text-amber/80">&lt;Button</span> <span class="text-copper">variant=</span><span class="text-green-400/70">"default"</span><span class="text-amber/80">&gt;</span>
    Ship it <span class="text-terracotta">&#x1f680;</span>
  <span class="text-amber/80">&lt;/Button&gt;</span>
<span class="text-amber/80">&lt;/Card&gt;</span></code></pre>
							</Card.CardContent>
						</Card.Card>

						<!-- Card 2: Buttons showcase -->
						<Card.Card class="border-white/[0.06] bg-card/60 backdrop-blur-sm">
							<Card.CardHeader class="pb-2">
								<Card.CardTitle class="text-xs font-medium text-muted-foreground uppercase tracking-wider">Buttons</Card.CardTitle>
							</Card.CardHeader>
							<Card.CardContent class="space-y-2 pb-4">
								<Button size="sm" class="w-full bg-gradient-to-r from-amber to-copper text-primary-foreground border-0">Primary</Button>
								<Button size="sm" variant="outline" class="w-full border-white/10">Outline</Button>
								<Button size="sm" variant="secondary" class="w-full">Secondary</Button>
							</Card.CardContent>
						</Card.Card>

						<!-- Card 3: Badges & Avatars -->
						<Card.Card class="border-white/[0.06] bg-card/60 backdrop-blur-sm">
							<Card.CardHeader class="pb-2">
								<Card.CardTitle class="text-xs font-medium text-muted-foreground uppercase tracking-wider">Badges</Card.CardTitle>
							</Card.CardHeader>
							<Card.CardContent class="flex flex-wrap gap-1.5 pb-4">
								<Badge class="border-amber/20 bg-amber/10 text-amber">svelte</Badge>
								<Badge class="border-copper/20 bg-copper/10 text-copper">tailwind</Badge>
								<Badge class="border-terracotta/20 bg-terracotta/10 text-terracotta">shadcn</Badge>
								<Badge variant="outline" class="border-white/10">typescript</Badge>
								<Badge class="border-green-400/20 bg-green-400/10 text-green-400/80">bun</Badge>
							</Card.CardContent>
						</Card.Card>

						<!-- Card 4: Wide card with avatars -->
						<Card.Card class="col-span-2 border-white/[0.06] bg-card/60 backdrop-blur-sm">
							<Card.CardContent class="flex items-center justify-between py-4">
								<div class="flex items-center gap-3">
									<div class="flex -space-x-2">
										<Avatar.Root class="size-7 border-2 border-card">
											<Avatar.Fallback class="bg-amber/20 text-amber text-xs">GH</Avatar.Fallback>
										</Avatar.Root>
										<Avatar.Root class="size-7 border-2 border-card">
											<Avatar.Fallback class="bg-copper/20 text-copper text-xs">SK</Avatar.Fallback>
										</Avatar.Root>
										<Avatar.Root class="size-7 border-2 border-card">
											<Avatar.Fallback class="bg-terracotta/20 text-terracotta text-xs">TW</Avatar.Fallback>
										</Avatar.Root>
									</div>
									<span class="text-sm text-muted-foreground">Built by the community</span>
								</div>
								<Badge variant="outline" class="border-amber/20 text-amber text-xs">
									<Sparkles class="mr-1 size-3" />
									v0.1
								</Badge>
							</Card.CardContent>
						</Card.Card>
					</div>

					<!-- Decorative diagonal line -->
					{#if showEffects}
						<div
							class="pointer-events-none absolute -top-8 -right-8 size-32 rounded-full opacity-20 blur-[60px]"
							style="background: var(--amber);"
						></div>
					{/if}
				</div>
			</div>
		</div>
	</section>

	<!-- ========== SEPARATOR WITH LABEL ========== -->
	<div class="mx-auto max-w-6xl px-6 lg:px-8">
		<div class="relative flex items-center py-4">
			<Separator class="flex-1 bg-white/[0.06]" />
			<span
				class="mx-4 shrink-0 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/50"
				>The Stack</span
			>
			<Separator class="flex-1 bg-white/[0.06]" />
		</div>
	</div>

	<!-- ========== STACK TABS ========== -->
	<section class="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
		{#if showEffects}
			<div
				class="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 size-[500px] rounded-full opacity-[0.06] blur-[100px]"
				style="background: var(--copper);"
			></div>
		{/if}

		<div class="relative">
			<div class="mb-14 max-w-xl">
				<h2
					class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
					style="font-family: var(--font-display);"
				>
					Everything <span
						class="italic text-muted-foreground"
						>carefully</span
					> chosen
				</h2>
				<p class="mt-4 text-lg text-muted-foreground leading-relaxed">
					Each piece of the stack earns its place. No bloat, no compromise — just
					tools that work brilliantly together.
				</p>
			</div>

			<Tabs.Root value="SvelteKit" class="relative">
				<Tabs.List class="mb-8 flex w-full justify-start gap-1 rounded-xl border border-white/[0.06] bg-secondary/30 p-1.5 backdrop-blur-sm sm:w-fit">
					{#each stackItems as item}
						<Tabs.Trigger
							value={item.name}
							class="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber/20 data-[state=active]:to-copper/10 data-[state=active]:text-amber data-[state=active]:shadow-sm"
						>
							{item.name}
						</Tabs.Trigger>
					{/each}
				</Tabs.List>

				{#each stackItems as item}
					<Tabs.Content value={item.name}>
						<Card.Card
							class="border-white/[0.06] bg-card/40 backdrop-blur-sm overflow-hidden"
						>
							<div class="grid md:grid-cols-[1fr_1.5fr] divide-x divide-white/[0.06]">
								<Card.CardHeader class="flex flex-col justify-center p-8">
									<div
										class="mb-4 flex size-14 items-center justify-center rounded-2xl border border-white/[0.06] bg-secondary/50"
									>
										<item.icon class="size-7 {item.color}" />
									</div>
									<Card.CardTitle class="text-2xl" style="font-family: var(--font-display);">{item.name}</Card.CardTitle>
									<Badge
										variant="outline"
										class="mt-2 w-fit border-white/10 text-xs text-muted-foreground"
										>v{item.version}</Badge
									>
								</Card.CardHeader>
								<Card.CardContent class="flex items-center p-8">
									<p class="text-lg leading-relaxed text-muted-foreground">
										{item.description}
									</p>
								</Card.CardContent>
							</div>
						</Card.Card>
					</Tabs.Content>
				{/each}
			</Tabs.Root>
		</div>
	</section>

	<!-- ========== FEATURES BENTO GRID ========== -->
	<section class="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
		<div class="mb-14 text-center">
			<Badge class="mb-4 border-copper/20 bg-copper/10 text-copper">
				<Eye class="mr-1 size-3" />
				Showcase
			</Badge>
			<h2
				class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
				style="font-family: var(--font-display);"
			>
				What's <span class="bg-gradient-to-r from-amber to-terracotta bg-clip-text text-transparent">possible</span>
			</h2>
			<p class="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
				shadcn-svelte gives you production-grade components out of the box. Here's a taste.
			</p>
		</div>

		<div class="grid gap-4 md:grid-cols-3 md:grid-rows-2">
			<!-- Large card: Performance -->
			<Card.Card
				class="group md:row-span-2 border-white/[0.06] bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-amber/20 hover:bg-card/70 overflow-hidden"
			>
				<Card.CardHeader class="relative p-8 pb-4">
					{#if showEffects}
						<div
							class="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-30"
							style="background: var(--amber);"
						></div>
					{/if}
					<div class="relative">
						<div
							class="mb-5 flex size-12 items-center justify-center rounded-2xl border border-amber/20 bg-amber/10"
						>
							<Zap class="size-6 text-amber" />
						</div>
						<Card.CardTitle class="text-xl" style="font-family: var(--font-display);">Blazing Fast</Card.CardTitle>
						<Card.CardDescription class="mt-2 text-base leading-relaxed">
							Svelte compiles away the framework. No virtual DOM, no runtime overhead. Your app ships lean.
						</Card.CardDescription>
					</div>
				</Card.CardHeader>
				<Card.CardContent class="p-8 pt-4">
					<div class="space-y-4">
						{#each [
							{ label: 'First Paint', value: '0.8s', pct: 90 },
							{ label: 'Bundle Size', value: '12kb', pct: 95 },
							{ label: 'Lighthouse', value: '99', pct: 99 }
						] as metric}
							<div>
								<div class="mb-1.5 flex items-center justify-between text-sm">
									<span class="text-muted-foreground">{metric.label}</span>
									<span class="font-mono text-amber">{metric.value}</span>
								</div>
								<div class="h-1.5 rounded-full bg-secondary/80 overflow-hidden">
									<div
										class="h-full rounded-full bg-gradient-to-r from-amber to-copper transition-all duration-1000"
										style="width: {metric.pct}%;"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</Card.CardContent>
			</Card.Card>

			<!-- Top right: Type Safety -->
			<Card.Card
				class="group border-white/[0.06] bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-copper/20 hover:bg-card/70"
			>
				<Card.CardHeader class="p-6">
					<div class="mb-3 flex size-10 items-center justify-center rounded-xl border border-copper/20 bg-copper/10">
						<Code class="size-5 text-copper" />
					</div>
					<Card.CardTitle class="text-lg" style="font-family: var(--font-display);">Type Safe</Card.CardTitle>
					<Card.CardDescription class="mt-1 leading-relaxed">
						Full TypeScript support from routes to components. Catch bugs at build time, not in production.
					</Card.CardDescription>
				</Card.CardHeader>
			</Card.Card>

			<!-- Top far right: DX -->
			<Card.Card
				class="group border-white/[0.06] bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-terracotta/20 hover:bg-card/70"
			>
				<Card.CardHeader class="p-6">
					<div class="mb-3 flex size-10 items-center justify-center rounded-xl border border-terracotta/20 bg-terracotta/10">
						<Cpu class="size-5 text-terracotta" />
					</div>
					<Card.CardTitle class="text-lg" style="font-family: var(--font-display);">Bun Runtime</Card.CardTitle>
					<Card.CardDescription class="mt-1 leading-relaxed">
						Installs in milliseconds, runs in milliseconds. The all-in-one JavaScript toolkit.
					</Card.CardDescription>
				</Card.CardHeader>
			</Card.Card>

			<!-- Bottom spanning: Component count -->
			<Card.Card
				class="group md:col-span-2 border-white/[0.06] bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-amber/20 hover:bg-card/70 overflow-hidden"
			>
				<Card.CardContent class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6">
					<div>
						<p class="text-4xl font-bold text-amber" style="font-family: var(--font-display);">50+</p>
						<p class="mt-1 text-sm text-muted-foreground">
							Accessible shadcn-svelte components ready to use
						</p>
					</div>
					<div class="flex flex-wrap gap-2">
						{#each ['Button', 'Card', 'Tabs', 'Badge', 'Avatar', 'Switch', 'Tooltip', 'Dialog', 'Dropdown', 'Sheet'] as comp}
							<Badge
								variant="outline"
								class="border-white/[0.06] bg-secondary/30 text-muted-foreground transition-colors hover:border-amber/20 hover:text-amber"
							>
								{comp}
							</Badge>
						{/each}
						<Badge class="border-amber/20 bg-amber/10 text-amber">
							+40 more
							<ChevronRight class="ml-0.5 size-3" />
						</Badge>
					</div>
				</Card.CardContent>
			</Card.Card>
		</div>
	</section>

	<!-- ========== CTA ========== -->
	<section class="relative mx-auto max-w-6xl px-6 py-32 lg:px-8">
		{#if showEffects}
			<div
				class="pointer-events-none absolute inset-0 opacity-[0.08]"
				style="background: radial-gradient(ellipse at center, var(--amber), transparent 70%);"
			></div>
		{/if}

		<div class="relative text-center">
			<h2
				class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
				style="font-family: var(--font-display);"
			>
				Start <span class="italic text-muted-foreground">building</span>
				<br />
				<span class="bg-gradient-to-r from-amber via-copper to-terracotta bg-clip-text text-transparent">
					something great
				</span>
			</h2>
			<p class="mx-auto mt-5 max-w-md text-lg text-muted-foreground">
				Clone the repo, install with Bun, and ship your first feature in minutes.
			</p>
			<div class="mt-10 flex flex-wrap items-center justify-center gap-4">
				<Button
					size="lg"
					class="bg-gradient-to-r from-amber via-copper to-terracotta text-primary-foreground border-0 hover:opacity-90 px-8 text-base"
					href="https://github.com/Georg97/dabsstack"
					target="_blank"
				>
					<Github class="mr-2 size-4" />
					Clone the repo
				</Button>
				<Button
					variant="ghost"
					size="lg"
					class="text-muted-foreground hover:text-foreground text-base"
				>
					Read the docs
					<ArrowRight class="ml-1.5 size-4" />
				</Button>
			</div>
		</div>
	</section>

	<!-- ========== FOOTER ========== -->
	<footer class="border-t border-white/[0.04]">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 lg:px-8">
			<div class="flex items-center gap-2 text-sm text-muted-foreground/60">
				<div
					class="flex size-5 items-center justify-center rounded bg-gradient-to-br from-amber/40 to-terracotta/40"
				>
					<Layers class="size-3 text-muted-foreground" />
				</div>
				<span>dabsstack</span>
			</div>
			<p class="text-xs text-muted-foreground/40">
				Built with SvelteKit, Tailwind & shadcn-svelte
			</p>
		</div>
	</footer>
</div>
