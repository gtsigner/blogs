##下载文件


```PHP-ThinkphpCode

  /**
     * @param $id
     * @return int
     */
    public function download($id)
    {

        $map['id'] = $id;
        $book = M('books')->where($map)->find();
        $filename = $book['path'];
        var_dump(__ROOT__ . $filename);
        if (!file_exists($this->writeDecode($filename))) {
            $this->error("文件不存在");
        }
        // http headers
        header('Content-Type: application-x/force-download');
        header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
        ob_end_clean();
        return readfile($this->writeDecode($filename));
    }

```