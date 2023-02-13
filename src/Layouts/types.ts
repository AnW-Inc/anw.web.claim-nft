export interface ILayoutsProps {
  path: String
  title?: String
  component: React.FunctionComponent<any>
  layout: React.FunctionComponent<any>
  isAuthRequired?: Boolean
}
