
const ShouldUpdate=()=>import('../../../src/07/cmpPromote/ShouldUpdate')
const Memo=()=>import('../../../src/07/cmpPromote/memo')
const UseMemo=()=>import('../../../src/07/cmpPromote/useMemo')
const UseCallback=()=>import('../../../src/07/cmpPromote/useCallback')

const Routes=[
  {
    path:'/sUpdate',
    component: ShouldUpdate
  },
  {
    path:'/memo',
    component: Memo
  },
  {
    path:'/useMemo',
    component: UseMemo
  }, {
    path:'/useCallback',
    component: UseCallback
  }

]
export default Routes