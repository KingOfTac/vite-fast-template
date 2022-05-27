import { neutralLayer2 } from '@fluentui/web-components';
import { css, html } from '@microsoft/fast-element';
import { MatchMediaStyleSheetBehavior } from '@microsoft/fast-foundation';
import { FASTElementLayout } from '@microsoft/fast-router';
import { githubIcon, homeIcon, fastIcon } from '../icons';

export const DefaultLayout = new FASTElementLayout(
	html`
		<header>
			<fluent-anchor class="page-title" href="/vite-fast-template/">
				<h1>FAST Starter</h1>
			</fluent-anchor>
			<fluent-anchor
				class="gh-link"
				title="go to this repository's page on github"
				href="https://github.com/kingoftac/vite-fast-template"
			>
				${githubIcon()}
			</fluent-anchor>
		</header>
		<nav>
			<fluent-anchor href="/vite-fast-template/">
				${homeIcon('start')}
				Home
			</fluent-anchor>
			<fluent-anchor href="https://fast.design">
				${fastIcon('start')}
				FAST
			</fluent-anchor>
		</nav>
		<main>
			<fluent-card class="page-wrapper">
				<slot></slot>
			</fluent-card>
		</main>
	`,
	css`
		:host {
			display: grid;
			grid-template-areas:
				'header header'
				'sidebar main';
			grid-template-rows: 42px 1fr;
			grid-template-columns: 215px calc(100% - 215px);
			width: 100%;
			height: 100%;
			background: ${neutralLayer2};
			z-index: 0;
		}

		header {
			grid-area: header;
			display: flex;
			height: 42px;
			align-items: center;
			justify-content: space-between;
			padding-inline: 1rem;
			background: ${neutralLayer2};
		}

		nav {
			grid-area: sidebar;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
			background: ${neutralLayer2};
			padding: 1rem;
		}

		nav > fluent-anchor {
			width: 100%;
		}

		main {
			grid-area: main;
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;
			overflow:  hidden;
		}

		.page-wrapper {
			border-top-right-radius: 0;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			padding: 1rem;
			overflow-y: auto;
		}

		.page-title::part(control) {
			background: transparent;
		}

		.gh-link {
			font-size: var(--type-ramp-plus-4-font-size);
		}
	`.withBehaviors(
		new MatchMediaStyleSheetBehavior(
			window.matchMedia('(max-width: 800px)'),
			css`
				:host {
					grid-template-columns: 1fr;
				}

				nav {
					display: none;
				}
			`
		)
	)
)