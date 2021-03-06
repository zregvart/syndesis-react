import { getFinishIcon, getStartIcon } from '@syndesis/api';
import { IntegrationWithMonitoring } from '@syndesis/models';
import {
  IntegrationActions,
  IntegrationsList,
  IntegrationsListItem,
  IntegrationsListItemUnreadable,
  IntegrationsListSkeleton,
} from '@syndesis/ui';
import { WithLoader } from '@syndesis/utils';
import * as React from 'react';
import { Translation } from 'react-i18next';
import { AppContext } from '../../../app';
import { ApiError } from '../../../shared';
import resolvers from '../resolvers';
import { WithIntegrationActions } from './WithIntegrationActions';

export interface IIntegrationsProps {
  error: boolean;
  loading: boolean;
  integrations: IntegrationWithMonitoring[];
}

export class Integrations extends React.Component<IIntegrationsProps> {
  public constructor(props: IIntegrationsProps) {
    super(props);
  }
  public render() {
    return (
      <Translation ns={['integrations', 'shared']}>
        {t => (
          <AppContext.Consumer>
            {({ getPodLogUrl }) => (
              <IntegrationsList>
                <WithLoader
                  error={this.props.error}
                  loading={this.props.loading}
                  loaderChildren={<IntegrationsListSkeleton />}
                  errorChildren={<ApiError />}
                >
                  {() =>
                    this.props.integrations.map(
                      (mi: IntegrationWithMonitoring) => {
                        try {
                          return (
                            <WithIntegrationActions
                              integration={mi.integration}
                            >
                              {({ actions }) => (
                                <IntegrationsListItem
                                  key={mi.integration.id}
                                  integrationName={mi.integration.name}
                                  currentState={mi.integration!.currentState!}
                                  targetState={mi.integration!.targetState!}
                                  isConfigurationRequired={
                                    !!(
                                      mi.integration!.board!.warnings ||
                                      mi.integration!.board!.errors ||
                                      mi.integration!.board!.notices
                                    )
                                  }
                                  monitoringValue={
                                    mi.monitoring &&
                                    t(
                                      'integrations:' +
                                        mi.monitoring.detailedState.value
                                    )
                                  }
                                  monitoringCurrentStep={
                                    mi.monitoring &&
                                    mi.monitoring.detailedState.currentStep
                                  }
                                  monitoringTotalSteps={
                                    mi.monitoring &&
                                    mi.monitoring.detailedState.totalSteps
                                  }
                                  monitoringLogUrl={getPodLogUrl(mi.monitoring)}
                                  startConnectionIcon={getStartIcon(
                                    process.env.PUBLIC_URL,
                                    mi.integration
                                  )}
                                  finishConnectionIcon={getFinishIcon(
                                    process.env.PUBLIC_URL,
                                    mi.integration
                                  )}
                                  actions={
                                    <IntegrationActions
                                      integrationId={mi.integration!.id!}
                                      actions={actions}
                                      detailsHref={resolvers.integration.details(
                                        {
                                          integrationId: mi.integration.id!,
                                        }
                                      )}
                                    />
                                  }
                                  i18nConfigurationRequired={t(
                                    'integrations:ConfigurationRequired'
                                  )}
                                  i18nError={t('shared:Error')}
                                  i18nPublished={t('shared:Published')}
                                  i18nUnpublished={t('shared:Unpublished')}
                                  i18nProgressPending={t('shared:Pending')}
                                  i18nProgressStarting={t(
                                    'integrations:progressStarting'
                                  )}
                                  i18nProgressStopping={t(
                                    'integrations:progressStopping'
                                  )}
                                  i18nLogUrlText={t('shared:viewLogs')}
                                />
                              )}
                            </WithIntegrationActions>
                          );
                        } catch (e) {
                          return (
                            <IntegrationsListItemUnreadable
                              key={mi.integration.id}
                              integrationName={
                                (mi && mi.integration && mi.integration.name) ||
                                'An integration'
                              }
                              i18nDescription={
                                "Sorry, we can't display more information about this integration right now."
                              }
                              rawObject={JSON.stringify(
                                mi.integration,
                                null,
                                2
                              )}
                            />
                          );
                        }
                      }
                    )
                  }
                </WithLoader>
              </IntegrationsList>
            )}
          </AppContext.Consumer>
        )}
      </Translation>
    );
  }
}
