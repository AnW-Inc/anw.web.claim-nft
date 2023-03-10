import sample from 'lodash/sample'
import { REACT_APP_NODE_1, REACT_APP_NODE_2, REACT_APP_NODE_3 } from 'configs'
// Array of available nodes to connect to
export const nodes = [REACT_APP_NODE_1, REACT_APP_NODE_2, REACT_APP_NODE_3]

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl
