import * as H from '@syndesis/history';
import { DropdownKebab } from 'patternfly-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../Layout';

export interface IIntegrationAction {
  href?: H.LocationDescriptor;
  onClick?: (e: React.MouseEvent<any>) => any;
  label: string | JSX.Element;
}

export interface IIntegrationActionsProps {
  integrationId: string;
  actions: IIntegrationAction[];
  detailsHref?: H.LocationDescriptor;
}

export class IntegrationActions extends React.Component<
  IIntegrationActionsProps
> {
  public render() {
    return (
      <>
        <ButtonLink href={this.props.detailsHref} as={'primary'}>
          View
        </ButtonLink>
        <DropdownKebab
          id={`integration-${this.props.integrationId}-action-menu`}
          pullRight={true}
        >
          {this.props.actions.map((a, idx) => (
            <li role={'presentation'} key={idx}>
              {a.href ? (
                <Link
                  to={a.href}
                  onClick={a.onClick}
                  role={'menuitem'}
                  tabIndex={idx + 1}
                >
                  {a.label}
                </Link>
              ) : (
                <a
                  href={'javascript:void(0)'}
                  onClick={a.onClick}
                  role={'menuitem'}
                  tabIndex={idx + 1}
                >
                  {a.label}
                </a>
              )}
            </li>
          ))}
        </DropdownKebab>
      </>
    );
  }
}
