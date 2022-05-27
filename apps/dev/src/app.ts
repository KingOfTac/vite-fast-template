import { css, customElement, FASTElement, html } from '@microsoft/fast-element';
import { Container, display, inject, Registration } from '@microsoft/fast-foundation';
import { DefaultRouteRecognizer, FASTRouter } from '@microsoft/fast-router';
import { AppRouterConfiguration } from './routes';

FASTRouter;

@customElement({
	name: "starter-app",
	template: html<App>`<fast-router :config="${x => x.config}"></fast-router>`,
	styles: css`${display('contents')}`
})
export class App extends FASTElement {
	@inject(AppRouterConfiguration) config!: AppRouterConfiguration;
	@Container container!: Container;

	connectedCallback(): void {
		this.container.register(
			Registration.transient(DefaultRouteRecognizer, DefaultRouteRecognizer)
		);

		super.connectedCallback();
	}
}