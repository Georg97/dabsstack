<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Layers from '@lucide/svelte/icons/layers';
	import Zap from '@lucide/svelte/icons/zap';
	import Palette from '@lucide/svelte/icons/palette';
	import Box from '@lucide/svelte/icons/box';
	import Terminal from '@lucide/svelte/icons/terminal';
	import Github from '@lucide/svelte/icons/github';
</script>

<svelte:head>
	<title>dabsstack — Build your own stack</title>
	<meta name="description" content="A modern web development stack built with SvelteKit, Tailwind CSS, and shadcn-svelte." />
</svelte:head>

<div class="min-h-screen">
	<!-- Nav -->
	<header class="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
		<nav class="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
			<a href="/" class="flex items-center gap-2 font-semibold tracking-tight">
				<Layers class="size-5" />
				dabsstack
			</a>
			<div class="flex items-center gap-3">
				<Button variant="ghost" size="sm" href="https://github.com/Georg97/dabsstack" target="_blank">
					<Github class="size-4" />
					GitHub
				</Button>
				<Button size="sm">Get Started</Button>
			</div>
		</nav>
	</header>

	<!-- Hero -->
	<section class="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
		<Badge variant="secondary" class="mb-4">Open Source</Badge>
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
			Build your stack,<br />
			<span class="text-muted-foreground">your way.</span>
		</h1>
		<p class="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
			A minimal, opinionated starting point for modern web apps. SvelteKit for the framework, Tailwind for styling, shadcn-svelte for components. Nothing more, nothing less.
		</p>
		<div class="mt-8 flex items-center justify-center gap-3">
			<Button size="lg">
				Get Started
				<ArrowRight class="ml-1 size-4" />
			</Button>
			<Button variant="outline" size="lg" href="https://github.com/Georg97/dabsstack" target="_blank">
				View on GitHub
			</Button>
		</div>

		<!-- Install command -->
		<div class="mx-auto mt-10 max-w-md">
			<div class="flex items-center gap-3 rounded-lg border bg-muted/50 px-4 py-3 font-mono text-sm">
				<Terminal class="size-4 shrink-0 text-muted-foreground" />
				<code class="flex-1 text-left">bun x sv create --template minimal .</code>
			</div>
		</div>
	</section>

	<Separator class="mx-auto max-w-5xl" />

	<!-- Features -->
	<section class="mx-auto max-w-5xl px-6 py-20">
		<div class="mb-12 text-center">
			<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Everything you need</h2>
			<p class="mt-3 text-muted-foreground">
				Carefully chosen tools that work great together.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<Card.Card class="transition-colors hover:border-foreground/20">
				<Card.CardHeader>
					<div class="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/10">
						<Zap class="size-5 text-primary" />
					</div>
					<Card.CardTitle>SvelteKit</Card.CardTitle>
					<Card.CardDescription>
						Fast by default. Server-side rendering, file-based routing, and a world-class developer experience.
					</Card.CardDescription>
				</Card.CardHeader>
			</Card.Card>

			<Card.Card class="transition-colors hover:border-foreground/20">
				<Card.CardHeader>
					<div class="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/10">
						<Palette class="size-5 text-primary" />
					</div>
					<Card.CardTitle>Tailwind CSS v4</Card.CardTitle>
					<Card.CardDescription>
						Utility-first CSS with the latest v4 engine. Lightning fast builds, no config file needed.
					</Card.CardDescription>
				</Card.CardHeader>
			</Card.Card>

			<Card.Card class="transition-colors hover:border-foreground/20">
				<Card.CardHeader>
					<div class="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/10">
						<Box class="size-5 text-primary" />
					</div>
					<Card.CardTitle>shadcn-svelte</Card.CardTitle>
					<Card.CardDescription>
						Beautiful, accessible components you own. Copy, paste, and customize — no black-box dependencies.
					</Card.CardDescription>
				</Card.CardHeader>
			</Card.Card>
		</div>
	</section>

	<Separator class="mx-auto max-w-5xl" />

	<!-- Stack breakdown -->
	<section class="mx-auto max-w-5xl px-6 py-20">
		<div class="mb-12 text-center">
			<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">The Stack</h2>
			<p class="mt-3 text-muted-foreground">
				Minimal dependencies, maximum productivity.
			</p>
		</div>

		<div class="mx-auto grid max-w-2xl gap-4">
			{#each [
				{ label: 'Framework', value: 'SvelteKit', badge: 'svelte' },
				{ label: 'Styling', value: 'Tailwind CSS v4', badge: 'css' },
				{ label: 'Components', value: 'shadcn-svelte', badge: 'ui' },
				{ label: 'Language', value: 'TypeScript', badge: 'types' },
				{ label: 'Runtime', value: 'Bun', badge: 'fast' },
			] as item}
				<div class="flex items-center justify-between rounded-lg border px-5 py-3.5 transition-colors hover:bg-muted/50">
					<div class="flex items-center gap-3">
						<span class="font-medium">{item.label}</span>
						<Badge variant="outline" class="text-xs">{item.badge}</Badge>
					</div>
					<span class="text-sm text-muted-foreground">{item.value}</span>
				</div>
			{/each}
		</div>
	</section>

	<Separator class="mx-auto max-w-5xl" />

	<!-- CTA -->
	<section class="mx-auto max-w-5xl px-6 py-20 text-center">
		<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Ready to build?</h2>
		<p class="mt-3 text-muted-foreground">
			Clone the repo and start building in seconds.
		</p>
		<div class="mt-8">
			<Button size="lg" href="https://github.com/Georg97/dabsstack" target="_blank">
				<Github class="mr-1 size-4" />
				Get the code
			</Button>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t py-8">
		<div class="mx-auto flex max-w-5xl items-center justify-between px-6 text-sm text-muted-foreground">
			<span>dabsstack</span>
			<span>Built with SvelteKit & shadcn-svelte</span>
		</div>
	</footer>
</div>
