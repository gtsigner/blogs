##PHP树-list
```PHP
/**
 * @param $list
 * @param string $pk
 * @param string $pid
 * @param string $child
 * @param int $root
 * @return array
 */
function list_to_tree($list, $pk = 'id', $pid = 'pid', $child = '_child', $root = 0)
{
    // 创建Tree
    $tree = array();
    if (is_array($list)) {
        // 创建基于主键的数组引用
        $refer = array();
        foreach ($list as $key => $data) {
            $refer[$data[$pk]] =&$list[$key];
        }
        foreach ($list as $key => $data) {
            // 判断是否存在parent
            $parentId = $data[$pid];
            if ($root == $parentId) {
                $tree[] =&$list[$key];
            } else {
                if (isset($refer[$parentId])) {
                    $parent =&$refer[$parentId];
                    $parent[$child][] =&$list[$key];
                }
            }
        }
    }
    return $tree;
}

/**
 * 将list_to_tree的树还原成列表
 * @param  array $tree 原来的树
 * @param  string $child 孩子节点的键
 * @param  string $order 排序显示的键，一般是主键 升序排列
 * @param  array $list 过渡用的中间数组，
 * @return array        返回排过序的列表数组
 * @author yangweijie <yangweijiester@gmail.com>
 */
function tree_to_list($tree, $child = '_child', $order = 'id', &$list = array())
{
    if (is_array($tree)) {
        foreach ($tree as $key => $value) {
            $reffer = $value;
            if (isset($reffer[$child])) {
                unset($reffer[$child]);
                tree_to_list($value[$child], $child, $order, $list);
            }
            $list[] = $reffer;
        }
        $list = list_sort_by($list, $order, $sortby = 'asc');
    }
    return $list;
}

```