import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../../store';

export const getMenuIdRouterParamas = (state: any) => state.menuId;


export const getRouterMenuId = createSelector(fromRoot.getRouterParamasState,
    getMenuIdRouterParamas);
