import { fillColor } from '@fluentui/web-components';
import { css, customElement, FASTElement, html } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';

@customElement({
	name: "home-page",
	template: html`
		<section class="scroller">
			<fluent-horizontal-scroll ${x => x.view === 'mobile' ? `view="${x.view}"` : ''}>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=1">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=2">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=3">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=4">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=5">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=6">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=7">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=8">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=9">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=10">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=11">
				</fluent-card>
				<fluent-card>
					<img src="https://placeimg.com/250/300/animals?random=12">
				</fluent-card>
			</fluent-horizontal-scroll>
		</section>
		<section class="cards">
			<fluent-card>
				<h2>Card</h2>
				<fluent-divider></fluent-divider>
				<p>We don’t serve their kind here! What? Your droids. They’ll have to wait outside. We don’t want them here. Listen, why don’t you wait out by the speeder. We don’t want any trouble. I heartily agree with you sir. Negola dewaghi wooldugger?!? He doesn’t like you. I’m sorry. I don’t like you either You just watch yourself. We’re wanted men. I have the death sentence in twelve systems. I’ll be careful than. You’ll be dead. This little one isn’t worth the effort. Come let me buy you something…</p>
				<fluent-button appearance="accent">button</fluent-button>
			</fluent-card>

			<fluent-card>
				<h2>Card</h2>
				<fluent-divider></fluent-divider>
				<p>The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. It’s a small thermal exhaust port, right below the main port. The shaft leads directly to the reactor system. A precise hit will start a chain reaction which should destroy the station. Only a precise hit will set up a chain reaction. The shaft is ray-shielded, so you’ll have to use proton torpedoes. That’s impossible, even for a computer. It’s not impossible. I used to bull’s-eye womp rats in my T-sixteen back home. They’re not much bigger than two meters. Man your ships! And may the Force be with you!</p>
				<fluent-button appearance="accent">button</fluent-button>
			</fluent-card>

			<fluent-card>
				<h2>Card</h2>
				<fluent-divider></fluent-divider>
				<p>Luke? Luke? Luke? Have you seen Luke this morning? He said he had some things to do before he started today, so he left early. Uh? Did he take those two new droids with him? I think so. Well, he’d better have those units in the south range repaired be midday or there’ll be hell to pay! Wait, there’s something dead ahead on the scanner. It looks like our droid…hit the accelerator.</p>
				<fluent-button appearance="accent">button</fluent-button>
			</fluent-card>

			<fluent-card>
				<h2>Card</h2>
				<fluent-divider></fluent-divider>
				<p>There. You see Lord Vader, she can be reasonable. Continue with the operation. You may fire when ready. What? You’re far too trusting. Dantooine is too remote to make an effective demonstration. But don’t worry. We will deal with your Rebel friends soon enough. No! Commence primary ignition.</p>
				<fluent-button appearance="accent">button</fluent-button>
			</fluent-card>
		</section>
	`,
	styles: css`
		${display('block')} :host {
			flex-direction: column;
		}

		.scroller {
			position: sticky;
			top: 0;
			z-index: 1;
			background: ${fillColor};
			padding-inline: clamp(1rem, 6%, 3rem);
		}
		
		fluent-horizontal-scroll {
			--scroll-fade-next: var(--fill-color);
			--scroll-fade-previous: var(--fill-color);
		}

		.scroller fluent-card {
			width: 250px;
			height: 300px;
		}

		.scroller img {
			display: flex;
			box-sizing: border-box;
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
		}

		.cards {
			--layout-grid-min-col-size: 30ch;
			--layout-grid-gap: 2ex;
			display: grid;
			grid-template-columns: repeat(
				auto-fit,
				minmax(min(100%, var(--layout-grid-min-col-size)), 1fr)
			);
			gap: max(1rem, var(--layout-grid-gap));
			padding: clamp(1rem, 6%, 3rem);
		}

		.cards > fluent-card {
			display: flex;
			flex-direction: column;
			padding: 1rem;
		}

		.cards > fluent-card > P {
			height: 100%;
		}

		.cards > fluent-card > fluent-button {
			justify-self: flex-end;
			align-self: flex-start;
		}
	`
})
export class HomePage extends FASTElement {

}