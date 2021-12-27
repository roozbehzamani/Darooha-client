'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">darooha-admin documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountantModule.html" data-type="entity-link" >AccountantModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountantModule-66ce47910c5ffa02401a89d26e68183daf107920c62cf806462a993ee949ffbb1c38530931e0608ca76caa213560d00b7a65a0cae56ae3b6d190c6d70852abe6"' : 'data-target="#xs-components-links-module-AccountantModule-66ce47910c5ffa02401a89d26e68183daf107920c62cf806462a993ee949ffbb1c38530931e0608ca76caa213560d00b7a65a0cae56ae3b6d190c6d70852abe6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountantModule-66ce47910c5ffa02401a89d26e68183daf107920c62cf806462a993ee949ffbb1c38530931e0608ca76caa213560d00b7a65a0cae56ae3b6d190c6d70852abe6"' :
                                            'id="xs-components-links-module-AccountantModule-66ce47910c5ffa02401a89d26e68183daf107920c62cf806462a993ee949ffbb1c38530931e0608ca76caa213560d00b7a65a0cae56ae3b6d190c6d70852abe6"' }>
                                            <li class="link">
                                                <a href="components/AccountantComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountantComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-7728a84c5a77eb69ead3247c3e942c5de8d50f5eff1c7f108e46701763df26b19e66f9a5a236244e3dfbc7aaf2358a23fda14987fedc2065142cf01673a2c75a"' : 'data-target="#xs-components-links-module-AdminModule-7728a84c5a77eb69ead3247c3e942c5de8d50f5eff1c7f108e46701763df26b19e66f9a5a236244e3dfbc7aaf2358a23fda14987fedc2065142cf01673a2c75a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-7728a84c5a77eb69ead3247c3e942c5de8d50f5eff1c7f108e46701763df26b19e66f9a5a236244e3dfbc7aaf2358a23fda14987fedc2065142cf01673a2c75a"' :
                                            'id="xs-components-links-module-AdminModule-7728a84c5a77eb69ead3247c3e942c5de8d50f5eff1c7f108e46701763df26b19e66f9a5a236244e3dfbc7aaf2358a23fda14987fedc2065142cf01673a2c75a"' }>
                                            <li class="link">
                                                <a href="components/AddBrandComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddBrandComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrandEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrandEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrandListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BrandListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductAddFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductAddFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductUpdateFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductUpdateFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersManagementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminModule-7728a84c5a77eb69ead3247c3e942c5de8d50f5eff1c7f108e46701763df26b19e66f9a5a236244e3dfbc7aaf2358a23fda14987fedc2065142cf01673a2c75a"' : 'data-target="#xs-injectables-links-module-AdminModule-7728a84c5a77eb69ead3247c3e942c5de8d50f5eff1c7f108e46701763df26b19e66f9a5a236244e3dfbc7aaf2358a23fda14987fedc2065142cf01673a2c75a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-7728a84c5a77eb69ead3247c3e942c5de8d50f5eff1c7f108e46701763df26b19e66f9a5a236244e3dfbc7aaf2358a23fda14987fedc2065142cf01673a2c75a"' :
                                        'id="xs-injectables-links-module-AdminModule-7728a84c5a77eb69ead3247c3e942c5de8d50f5eff1c7f108e46701763df26b19e66f9a5a236244e3dfbc7aaf2358a23fda14987fedc2065142cf01673a2c75a"' }>
                                        <li class="link">
                                            <a href="injectables/AdminProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8acfe646e74209d50fc46bd977bb805255f15e65650f6a4d67b38bb9299e0cdc0c85912b7a5432b3455220f74f51cae913a9456badfe8bda2dfe9c48561e8ff7"' : 'data-target="#xs-components-links-module-AppModule-8acfe646e74209d50fc46bd977bb805255f15e65650f6a4d67b38bb9299e0cdc0c85912b7a5432b3455220f74f51cae913a9456badfe8bda2dfe9c48561e8ff7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8acfe646e74209d50fc46bd977bb805255f15e65650f6a4d67b38bb9299e0cdc0c85912b7a5432b3455220f74f51cae913a9456badfe8bda2dfe9c48561e8ff7"' :
                                            'id="xs-components-links-module-AppModule-8acfe646e74209d50fc46bd977bb805255f15e65650f6a4d67b38bb9299e0cdc0c85912b7a5432b3455220f74f51cae913a9456badfe8bda2dfe9c48561e8ff7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-8acfe646e74209d50fc46bd977bb805255f15e65650f6a4d67b38bb9299e0cdc0c85912b7a5432b3455220f74f51cae913a9456badfe8bda2dfe9c48561e8ff7"' : 'data-target="#xs-injectables-links-module-AppModule-8acfe646e74209d50fc46bd977bb805255f15e65650f6a4d67b38bb9299e0cdc0c85912b7a5432b3455220f74f51cae913a9456badfe8bda2dfe9c48561e8ff7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8acfe646e74209d50fc46bd977bb805255f15e65650f6a4d67b38bb9299e0cdc0c85912b7a5432b3455220f74f51cae913a9456badfe8bda2dfe9c48561e8ff7"' :
                                        'id="xs-injectables-links-module-AppModule-8acfe646e74209d50fc46bd977bb805255f15e65650f6a4d67b38bb9299e0cdc0c85912b7a5432b3455220f74f51cae913a9456badfe8bda2dfe9c48561e8ff7"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TitleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TitleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-c5da745e557d29352863c9b3d0a99d5d6ccd1fc0ca5bccc254aa8a157644e4942e0c45073b69a48d6402231819dc23734a97a60b6215913b7698b72ce272bb8f"' : 'data-target="#xs-components-links-module-AuthModule-c5da745e557d29352863c9b3d0a99d5d6ccd1fc0ca5bccc254aa8a157644e4942e0c45073b69a48d6402231819dc23734a97a60b6215913b7698b72ce272bb8f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-c5da745e557d29352863c9b3d0a99d5d6ccd1fc0ca5bccc254aa8a157644e4942e0c45073b69a48d6402231819dc23734a97a60b6215913b7698b72ce272bb8f"' :
                                            'id="xs-components-links-module-AuthModule-c5da745e557d29352863c9b3d0a99d5d6ccd1fc0ca5bccc254aa8a157644e4942e0c45073b69a48d6402231819dc23734a97a60b6215913b7698b72ce272bb8f"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link" >BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogModule-443ba5e44edbeee7703aff36d8f22f337ed6b0ef622964626c1664719f6e72799104a31474562d3b00e09f9378c2f974ec53410479513447bbd290a6dd17387a"' : 'data-target="#xs-components-links-module-BlogModule-443ba5e44edbeee7703aff36d8f22f337ed6b0ef622964626c1664719f6e72799104a31474562d3b00e09f9378c2f974ec53410479513447bbd290a6dd17387a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-443ba5e44edbeee7703aff36d8f22f337ed6b0ef622964626c1664719f6e72799104a31474562d3b00e09f9378c2f974ec53410479513447bbd290a6dd17387a"' :
                                            'id="xs-components-links-module-BlogModule-443ba5e44edbeee7703aff36d8f22f337ed6b0ef622964626c1664719f6e72799104a31474562d3b00e09f9378c2f974ec53410479513447bbd290a6dd17387a"' }>
                                            <li class="link">
                                                <a href="components/BlogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PanelModule.html" data-type="entity-link" >PanelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PanelModule-383f05ec0695508bae6cf840fe3fd80656efa337b196c6219912951489ec7901b86e32b500c9bc3b2e37239fffb6748b5b0d7fcf9bb1e3ca5c1d4dcfda34abc0"' : 'data-target="#xs-components-links-module-PanelModule-383f05ec0695508bae6cf840fe3fd80656efa337b196c6219912951489ec7901b86e32b500c9bc3b2e37239fffb6748b5b0d7fcf9bb1e3ca5c1d4dcfda34abc0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PanelModule-383f05ec0695508bae6cf840fe3fd80656efa337b196c6219912951489ec7901b86e32b500c9bc3b2e37239fffb6748b5b0d7fcf9bb1e3ca5c1d4dcfda34abc0"' :
                                            'id="xs-components-links-module-PanelModule-383f05ec0695508bae6cf840fe3fd80656efa337b196c6219912951489ec7901b86e32b500c9bc3b2e37239fffb6748b5b0d7fcf9bb1e3ca5c1d4dcfda34abc0"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-PanelModule-383f05ec0695508bae6cf840fe3fd80656efa337b196c6219912951489ec7901b86e32b500c9bc3b2e37239fffb6748b5b0d7fcf9bb1e3ca5c1d4dcfda34abc0"' : 'data-target="#xs-directives-links-module-PanelModule-383f05ec0695508bae6cf840fe3fd80656efa337b196c6219912951489ec7901b86e32b500c9bc3b2e37239fffb6748b5b0d7fcf9bb1e3ca5c1d4dcfda34abc0"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-PanelModule-383f05ec0695508bae6cf840fe3fd80656efa337b196c6219912951489ec7901b86e32b500c9bc3b2e37239fffb6748b5b0d7fcf9bb1e3ca5c1d4dcfda34abc0"' :
                                        'id="xs-directives-links-module-PanelModule-383f05ec0695508bae6cf840fe3fd80656efa337b196c6219912951489ec7901b86e32b500c9bc3b2e37239fffb6748b5b0d7fcf9bb1e3ca5c1d4dcfda34abc0"' }>
                                        <li class="link">
                                            <a href="directives/HasRoleDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HasRoleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PanelRoutingModule.html" data-type="entity-link" >PanelRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SiteModule.html" data-type="entity-link" >SiteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SiteModule-87ed7e930ce9135ae63cf112870f42ee2d17ee59f9b81bda608edf21e4dd05293e2f83adb9c48abaf9cba6646137c223a5f7e16f7a3242a1df63b75e5310fb33"' : 'data-target="#xs-components-links-module-SiteModule-87ed7e930ce9135ae63cf112870f42ee2d17ee59f9b81bda608edf21e4dd05293e2f83adb9c48abaf9cba6646137c223a5f7e16f7a3242a1df63b75e5310fb33"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SiteModule-87ed7e930ce9135ae63cf112870f42ee2d17ee59f9b81bda608edf21e4dd05293e2f83adb9c48abaf9cba6646137c223a5f7e16f7a3242a1df63b75e5310fb33"' :
                                            'id="xs-components-links-module-SiteModule-87ed7e930ce9135ae63cf112870f42ee2d17ee59f9b81bda608edf21e4dd05293e2f83adb9c48abaf9cba6646137c223a5f7e16f7a3242a1df63b75e5310fb33"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SiteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SiteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SiteModule-87ed7e930ce9135ae63cf112870f42ee2d17ee59f9b81bda608edf21e4dd05293e2f83adb9c48abaf9cba6646137c223a5f7e16f7a3242a1df63b75e5310fb33"' : 'data-target="#xs-injectables-links-module-SiteModule-87ed7e930ce9135ae63cf112870f42ee2d17ee59f9b81bda608edf21e4dd05293e2f83adb9c48abaf9cba6646137c223a5f7e16f7a3242a1df63b75e5310fb33"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SiteModule-87ed7e930ce9135ae63cf112870f42ee2d17ee59f9b81bda608edf21e4dd05293e2f83adb9c48abaf9cba6646137c223a5f7e16f7a3242a1df63b75e5310fb33"' :
                                        'id="xs-injectables-links-module-SiteModule-87ed7e930ce9135ae63cf112870f42ee2d17ee59f9b81bda608edf21e4dd05293e2f83adb9c48abaf9cba6646137c223a5f7e16f7a3242a1df63b75e5310fb33"' }>
                                        <li class="link">
                                            <a href="injectables/HomeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SiteRoutingModule.html" data-type="entity-link" >SiteRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-67f68bea645cdd8158c746d27504734dd4d2c74b897cea0102b1e1f870d949fd12c7e990d7dda23abf451e30481f1dd58df5f2a428b296993caf6ff82f38c2f0"' : 'data-target="#xs-components-links-module-UserModule-67f68bea645cdd8158c746d27504734dd4d2c74b897cea0102b1e1f870d949fd12c7e990d7dda23abf451e30481f1dd58df5f2a428b296993caf6ff82f38c2f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-67f68bea645cdd8158c746d27504734dd4d2c74b897cea0102b1e1f870d949fd12c7e990d7dda23abf451e30481f1dd58df5f2a428b296993caf6ff82f38c2f0"' :
                                            'id="xs-components-links-module-UserModule-67f68bea645cdd8158c746d27504734dd4d2c74b897cea0102b1e1f870d949fd12c7e990d7dda23abf451e30481f1dd58df5f2a428b296993caf6ff82f38c2f0"' }>
                                            <li class="link">
                                                <a href="components/AddWalletComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddWalletComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatMessageTicketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatMessageTicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatTicketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatTicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateFormTicketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateFormTicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailTicketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailTicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditUserAddressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditUserAddressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListTicketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListTicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageTicketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageTicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageUserAddressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageUserAddressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageWalletComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageWalletComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TicketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserAddressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserAddressComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserWalletComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserWalletComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-67f68bea645cdd8158c746d27504734dd4d2c74b897cea0102b1e1f870d949fd12c7e990d7dda23abf451e30481f1dd58df5f2a428b296993caf6ff82f38c2f0"' : 'data-target="#xs-injectables-links-module-UserModule-67f68bea645cdd8158c746d27504734dd4d2c74b897cea0102b1e1f870d949fd12c7e990d7dda23abf451e30481f1dd58df5f2a428b296993caf6ff82f38c2f0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-67f68bea645cdd8158c746d27504734dd4d2c74b897cea0102b1e1f870d949fd12c7e990d7dda23abf451e30481f1dd58df5f2a428b296993caf6ff82f38c2f0"' :
                                        'id="xs-injectables-links-module-UserModule-67f68bea645cdd8158c746d27504734dd4d2c74b897cea0102b1e1f870d949fd12c7e990d7dda23abf451e30481f1dd58df5f2a428b296993caf6ff82f38c2f0"' }>
                                        <li class="link">
                                            <a href="injectables/AddressService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WalletService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WalletService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CustomRouteSerializer.html" data-type="entity-link" >CustomRouteSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditDecodedToken.html" data-type="entity-link" >EditDecodedToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditLoggedUser.html" data-type="entity-link" >EditLoggedUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditLoggedUserName.html" data-type="entity-link" >EditLoggedUserName</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditLoggedUserPhotoUrl.html" data-type="entity-link" >EditLoggedUserPhotoUrl</a>
                            </li>
                            <li class="link">
                                <a href="classes/FaMatPaginatorIntl.html" data-type="entity-link" >FaMatPaginatorIntl</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadLoggedUser.html" data-type="entity-link" >LoadLoggedUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadLoggedUserFail.html" data-type="entity-link" >LoadLoggedUserFail</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadLoggedUserSuccess.html" data-type="entity-link" >LoadLoggedUserSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationResult.html" data-type="entity-link" >PaginationResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetDecodedToken.html" data-type="entity-link" >ResetDecodedToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetLoggedUser.html" data-type="entity-link" >ResetLoggedUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateInfoLoggedUserName.html" data-type="entity-link" >UpdateInfoLoggedUserName</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddressService.html" data-type="entity-link" >AddressService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminProductService.html" data-type="entity-link" >AdminProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BrandService.html" data-type="entity-link" >BrandService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentService.html" data-type="entity-link" >CommentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link" >HomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggedUserEffects.html" data-type="entity-link" >LoggedUserEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TicketService.html" data-type="entity-link" >TicketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TitleService.html" data-type="entity-link" >TitleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WalletService.html" data-type="entity-link" >WalletService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AddressResolver.html" data-type="entity-link" >AddressResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/AdminBrandListResolver.html" data-type="entity-link" >AdminBrandListResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/AdminProductListResolver.html" data-type="entity-link" >AdminProductListResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/BrandEditResolver.html" data-type="entity-link" >BrandEditResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/EditProductResolver.html" data-type="entity-link" >EditProductResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/HomeSliderResolver.html" data-type="entity-link" >HomeSliderResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginRedirectGuard.html" data-type="entity-link" >LoginRedirectGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/NotificationResolver.html" data-type="entity-link" >NotificationResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/OrderItemResolver.html" data-type="entity-link" >OrderItemResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/OrderResolver.html" data-type="entity-link" >OrderResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/PreventUnsavedGuard.html" data-type="entity-link" >PreventUnsavedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProductListResolver.html" data-type="entity-link" >ProductListResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProductResolver.html" data-type="entity-link" >ProductResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/TicketOverviewResolver.html" data-type="entity-link" >TicketOverviewResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/TicketResolver.html" data-type="entity-link" >TicketResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserProfileResolver.html" data-type="entity-link" >UserProfileResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/WalletResolver.html" data-type="entity-link" >WalletResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddProduct.html" data-type="entity-link" >AddProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AllMenu.html" data-type="entity-link" >AllMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthTokenState.html" data-type="entity-link" >AuthTokenState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Bascket.html" data-type="entity-link" >Bascket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Brand.html" data-type="entity-link" >Brand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommentForSend.html" data-type="entity-link" >CommentForSend</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DecodedToken.html" data-type="entity-link" >DecodedToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterSortOrderBy.html" data-type="entity-link" >FilterSortOrderBy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notify.html" data-type="entity-link" >Notify</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Orderitem.html" data-type="entity-link" >Orderitem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductImage.html" data-type="entity-link" >ProductImage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductList.html" data-type="entity-link" >ProductList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RouterStateUrl.html" data-type="entity-link" >RouterStateUrl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Slider.html" data-type="entity-link" >Slider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpecialProduct.html" data-type="entity-link" >SpecialProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketContent.html" data-type="entity-link" >TicketContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserAddress.html" data-type="entity-link" >UserAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Wallet.html" data-type="entity-link" >Wallet</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});