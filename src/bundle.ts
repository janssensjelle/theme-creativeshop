/* tslint:disable:no-unused-expression no-unused-new */

// =============================================================================
// Main scripting entry point.
// We import all of the components here and initialize them.
// It is a job of every component if it is present of the page.
// This approach creates nice bundle, with all of the components and their dependencies.
// =============================================================================
// Utilities
// =============================================================================

// =============================================================================
// Components
// =============================================================================

// =============================================================================
// Customizations
// =============================================================================

import './customizations/sticky-block/sticky-block';

import { FlyoutCollection } from './components/flyout/flyout.ts';
new FlyoutCollection( { name: 'cs-dropdown', type: 'dropdown' } );

import { QtyIncrementCollection } from './customizations/qty-increment/qty-increment.ts';
new QtyIncrementCollection();
