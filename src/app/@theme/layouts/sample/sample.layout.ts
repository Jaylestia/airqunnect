import {Component, OnDestroy} from '@angular/core';
import {
    NbMediaBreakpoint,
    NbMediaBreakpointsService,
    NbMenuItem,
    NbMenuService,
    NbSidebarService,
    NbThemeService,
} from '@nebular/theme';

import {StateService} from '../../../@core/data/state.service';

import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';

// TODO: move layouts into the framework
@Component({
    selector: 'ngx-sample-layout',
    styleUrls: ['./sample.layout.scss'],
    template: `
        <nb-layout [center]="layout.id === 'center-column'" windowMode>
            <nb-layout-header fixed>
                <ngx-header [position]="sidebar.id === 'left' ? 'normal': 'inverse'"></ngx-header>
            </nb-layout-header>

            <nb-sidebar class="menu-sidebar"
                        tag="menu-sidebar"
                        responsive
                        [right]="sidebar.id === 'right'">
                <nb-sidebar-header>
                    <!--          <a href="#" class="btn btn-hero-success main-btn">
                                <i class="ion ion-social-github"></i> <span>Support Us</span>
                              </a>-->

                    <svg width="31" height="30" xmlns="http://www.w3.org/2000/svg">
                        <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
                        <g>
                            <title>background</title>
                            <rect fill="#fff" fill-opacity="0" id="canvas_background" height="32" width="33" y="-1"
                                  x="-1"/>
                            <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                                <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
                            </g>
                        </g>
                        <g>
                            <title>Layer 1</title>
                            <path stroke="#FFFACD" id="svg_6"
                                  d="m3.064542,9.163379c0.000701,-0.268422 0.239508,-1.91418 0.530874,
-3.657259c0.908528,-5.43524 0.921892,-5.459225 2.075409,-3.726894l0.682468,1.024921l1.995872,-1.013701c2.639913,
-1.3408 5.789943,-1.836807 8.685555,-1.367622c1.229156,0.199172 2.533381,0.522895 2.898279,0.719382c0.724467,
0.390092 0.678028,0.725099 -0.476637,3.438377c-0.632846,1.4871 -0.693592,1.529483 -1.786762,
1.246748c-1.860614,-0.4812 -4.89023,-0.329633 -6.352942,0.317833l-1.371434,0.607083l0.962646,
1.01095c0.529458,0.556038 0.829389,1.093827 0.666522,1.195099c-0.162874,0.101275 -2.144472,
0.298663 -4.403548,0.438624c-3.38938,0.210005 -4.107224,0.16919 -4.1063,-0.233539m17.45265,
14.986067l-1.468251,-1.956606l1.336852,-1.300651c1.375925,-1.338649 2.368261,
-3.218099 2.805443,-5.313441l0.249486,-1.195723l-1.438953,0.231498c-0.791425,
0.127341 -1.443824,0.110795 -1.449773,-0.036753c-0.027788,-0.688863 3.735023,
-7.479494 4.100773,-7.400551c0.575087,0.124121 6.40968,5.208557 6.40968,5.58556c0,
0.168266 -0.613195,0.4046 -1.362644,0.525175l-1.362647,0.219223l-0.134487,
2.337931c-0.172493,2.998488 -1.742887,6.459152 -3.929314,8.658992c-0.875708,
0.881092 -1.748734,1.601976 -1.940054,1.601976c-0.191325,0 -1.008572,-0.880488 -1.81611,-1.956627l0,
-0.000001zm-13.253917,5.484222c0,-0.216345 0.23067,-0.842148 0.5126,-1.390686c0.51151,
-0.995218 0.508549,-1.00005 -1.398395,-2.273964c-2.983555,-1.993124 -5.201235,
-5.530799 -5.898792,-9.40986l-0.228688,-1.271724l1.630555,-0.224856c3.3612,
-0.463531 3.391893,-0.44952 4.065057,1.855398c0.454252,1.555359 1.012939,2.487455 2.217266,
3.699169c0.885498,0.890937 1.733721,1.542939 1.884942,1.448908c0.151215,-0.094029 0.370088,
-0.649636 0.486387,-1.234689c0.116297,-0.585053 0.358802,-1.063738 0.538898,-1.063738c0.413478,
0 4.30719,6.177036 4.369006,6.931044c0.041282,0.503594 -2.063554,1.375528 -7.549082,
3.127249c-0.349784,0.111695 -0.629751,0.026243 -0.629751,-0.192252l-0.000001,0.000001z"
                                  fill-opacity="null" stroke-opacity="null" stroke-width="0.5" fill="#fff"/>
                            <ellipse ry="11.74998" rx="11.562481" id="svg_1" cy="14.421524" cx="14.528899"
                                     stroke-width="1.5" stroke="#87cefa" fill="#98ff98"/>
                            <text xml:space="preserve" text-anchor="start" font-family="'Courier New',
Courier, monospace" font-size="6" id="svg_3" y="21.546513" x="8.02891" fill-opacity="null"
                                  stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">AQMP</text>
                            <path stroke="#00FF00" id="svg_5"
                                  d="m14.704268,8.966268c1.342276,0 2.604312,
0.562964 3.552365,1.584241c0.950234,1.021744 1.472666,2.383136 1.472666,3.831891l2.069233,
0c0,-4.208446 -3.182999,-7.631547 -7.0947,-7.631547l0,2.215414l0.000436,0zm0.002617,
-3.928133c4.785183,0 8.67726,4.193029 8.67726,9.346601l2.068361,0c0,-6.375273 -4.820506,
-11.562482 -10.746057,-11.562482l0,2.215882l0.000436,0zm2.860731,7.797866c0,0.84795 -0.641484,
1.535653 -1.432546,1.535653s-1.432546,-0.687704 -1.432546,-1.535653c0,-0.847015 0.641484,
-1.534719 1.432546,-1.534719s1.432546,0.687236 1.432546,1.534719z"
                                  fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="#fff"/>
                        </g>
                    </svg>


                </nb-sidebar-header>
                <ng-content select="nb-menu"></ng-content>
            </nb-sidebar>

            <nb-layout-column class="main-content">
                <ng-content select="router-outlet"></ng-content>
            </nb-layout-column>

            <nb-layout-column left class="small" *ngIf="layout.id === 'two-column' || layout.id === 'three-column'">
                <nb-menu [items]="subMenu"></nb-menu>
            </nb-layout-column>

            <nb-layout-column right class="small" *ngIf="layout.id === 'three-column'">
                <nb-menu [items]="subMenu"></nb-menu>
            </nb-layout-column>

            <nb-layout-footer fixed>
                <ngx-footer></ngx-footer>
            </nb-layout-footer>

            <nb-sidebar class="settings-sidebar"
                        tag="settings-sidebar"
                        state="collapsed"
                        fixed
                        [right]="sidebar.id !== 'right'">
                <ngx-theme-settings></ngx-theme-settings>
            </nb-sidebar>
        </nb-layout>
    `,
})
export class SampleLayoutComponent implements OnDestroy {

    subMenu: NbMenuItem[] = [
        {
            title: 'PAGE LEVEL MENU',
            group: true,
        },
        {
            title: 'Buttons',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/buttons',
        },
        {
            title: 'Grid',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/grid',
        },
        {
            title: 'Icons',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/icons',
        },
        {
            title: 'Modals',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/modals',
        },
        {
            title: 'Typography',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/typography',
        },
        {
            title: 'Animated Searches',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/search-fields',
        },
        {
            title: 'Tabs',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/tabs',
        },
    ];
    layout: any = {};
    sidebar: any = {};

    protected layoutState$: Subscription;
    protected sidebarState$: Subscription;
    protected menuClick$: Subscription;

    constructor(protected stateService: StateService,
                protected menuService: NbMenuService,
                protected themeService: NbThemeService,
                protected bpService: NbMediaBreakpointsService,
                protected sidebarService: NbSidebarService) {
        this.layoutState$ = this.stateService.onLayoutState()
            .subscribe((layout: string) => this.layout = layout);

        this.sidebarState$ = this.stateService.onSidebarState()
            .subscribe((sidebar: string) => {
                this.sidebar = sidebar;
            });

        const isBp = this.bpService.getByName('is');
        this.menuClick$ = this.menuService.onItemSelect()
            .withLatestFrom(this.themeService.onMediaQueryChange())
            .delay(20)
            .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {

                if (bpTo.width <= isBp.width) {
                    this.sidebarService.collapse('menu-sidebar');
                }
            });
    }

    ngOnDestroy() {
        this.layoutState$.unsubscribe();
        this.sidebarState$.unsubscribe();
        this.menuClick$.unsubscribe();
    }
}
