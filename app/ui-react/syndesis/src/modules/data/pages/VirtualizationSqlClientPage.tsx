import { WithViewEditorStates } from '@syndesis/api';
import { RestDataService, ViewEditorState } from '@syndesis/models';
import { Breadcrumb } from '@syndesis/ui';
import { WithRouteData } from '@syndesis/utils';
import * as React from 'react';
import { Translation } from 'react-i18next';
import { Link } from 'react-router-dom';
import resolvers from '../../resolvers';
import {
  HeaderView,
  ViewSqlFormAndTable,
  VirtualizationNavBar,
} from '../shared/';
import { getPreviewVdbName } from '../shared/VirtualizationUtils';

/**
 * @param virtualizationId - the ID of the virtualization whose details are being shown by this page.
 */
export interface IVirtualizationSqlClientPageRouteParams {
  virtualizationId: string;
  virtualization: RestDataService;
}

/**
 * NOTE that this SQL query page requires
 *  1) a list of View children of the Virtualization
 *    - This list will need to be retrieved (already in the VirtualizationViewsPage)
 *  2) Views list needs to populate the View selector DropdownButton's MenuItems
 *  3) If # Views == 0
 *    - Define Example SQL statement and show query results in EMPTY STATE mode
 *  4) if # Views > 0
 *    - Select the first view
 *    - Enter a simple SQL statement like:  "SELECT * FROM view1"
 */

/**
 * @param virtualizationId - the virtualization whose details are being shown by this page. If
 * exists, it must equal to the [virtualizationId]{@link IVirtualizationSqlClientPageRouteParams#virtualizationId}.
 */

export interface IVirtualizationSqlClientPageRouteState {
  virtualization: RestDataService;
}

export class VirtualizationSqlClientPage extends React.Component<
  IVirtualizationSqlClientPageRouteState
> {
  public render() {
    return (
      <WithRouteData<
        IVirtualizationSqlClientPageRouteParams,
        IVirtualizationSqlClientPageRouteState
      >>
        {({ virtualizationId }, { virtualization }, { history }) => (
          <Translation ns={['data', 'shared']}>
            {t => (
              <>
                <Breadcrumb>
                  <Link to={resolvers.dashboard.root()}>
                    {t('shared:Home')}
                  </Link>
                  <Link to={resolvers.data.root()}>
                    {t('shared:DataVirtualizations')}
                  </Link>
                  <span>
                    {virtualizationId + ' '}
                    {t('data:virtualization.sqlClient')}
                  </span>
                </Breadcrumb>
                <HeaderView virtualizationId={virtualizationId} />
                <VirtualizationNavBar virtualization={virtualization} />
                <WithViewEditorStates
                  idPattern={virtualization.serviceVdbName + '*'}
                >
                  {({ data, hasData, error }) => (
                    <ViewSqlFormAndTable
                      views={data.map(
                        (editorState: ViewEditorState) =>
                          editorState.viewDefinition
                      )}
                      targetVdb={getPreviewVdbName()}
                    />
                  )}
                </WithViewEditorStates>
              </>
            )}
          </Translation>
        )}
      </WithRouteData>
    );
  }
}
