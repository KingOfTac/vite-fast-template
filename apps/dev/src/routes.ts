import { RouterConfiguration } from '@microsoft/fast-router';
import { DefaultLayout } from './layouts/default-layout';
import { HomePage } from './pages/home-page';

export class AppRouterConfiguration extends RouterConfiguration {
	protected configure(): void | Promise<void> {
		this.title = 'FAST Starter';
		this.defaultLayout = DefaultLayout;

		this.routes.map(
			{ path: '', redirect: 'home' },
			{ path: 'home', title: 'Home', element: HomePage }
		)
	}
}