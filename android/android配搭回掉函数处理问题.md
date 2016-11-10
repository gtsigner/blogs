###andriod当中所有的网络请求IO都是非阻塞的（第三方库(不绝对)）

	所以如果使用第三方库，那么肯定会接触到很多回掉函数去处理我们网络IO回来的数据，然而看如下Demo。
	我使用的第三方的库 xUtils。




-	网络请求：

	
		 public static void getDocumentByCategory(Category cate, int p, int count, BlogListAdapter adapter) {
	
	        final RequestParams params = new RequestParams(uri);
	
	        if (cate.getId() != 0) {
	            params.addQueryStringParameter("cat_id", cate.getId() + "");
	        }
	        if (cate.getName() != null) {
	            params.addQueryStringParameter("cat_name", cate.getName());
	        }
	        x.http().get(params, new Callback.CommonCallback<String>() {
	            @Override
	            public void onSuccess(String result) {
	
	                List<Document> docList = new ArrayList<Document>();
	                Log.e(LOG_TAG, "onSuccess:" + result.toString());
	                Gson gson = new Gson();
	                ApiReturn ret = gson.fromJson(result, ApiReturn.class);
	                docList = gson.fromJson(gson.toJson(ret.getData()), new TypeToken<ArrayList<Document>>() {
	                }.getType());
	                for (int i = 0; i < docList.size(); i++) {
	                    System.out.println(docList.get(i).getTitle());
	                }
	                //TODO 处理adapter数据更新
	            }
	
	            @Override
	            public void onError(Throwable ex, boolean isOnCallback) {
	                Log.e(LOG_TAG, "onError:" + ex.getMessage());
	            }
	
	            @Override
	            public void onCancelled(CancelledException cex) {
	                Log.e(LOG_TAG, "onCancelled");
	            }
	
	            @Override
	            public void onFinished() {
	                Log.e(LOG_TAG, "onFinished");
	            }
	        });
	    }
	

	-	我们需要把我们网络请求后的数据显示出来，那么我们要么使用消息通知，要么使用传递过来一个adapter，不知道大家是不是这么做的，至少我不懂的时候我是这么做的。
	-	这样存在的问题就是不能交付给他自己去处理了。


-	解决方案（使用回调函数）

	最近看Nodejs，他的基本都是全都是回调的形式，这样的话我们也可以在android这样去处理，也形成了非阻塞式


	
	-	定义接口
			
			/**
			 * 回掉接口
			 */
			public interface CallBackFunction {
			    public void handleEvent(Object data, int what);
			}


	-	API使用回调


		
			  public static void getDocumentByCategory(Category cate, int p, int count, final CallBackFunction func) {
			
			        final RequestParams params = new RequestParams(uri);
			
			        if (cate.getId() != 0) {
			            params.addQueryStringParameter("cat_id", cate.getId() + "");
			        }
			        if (cate.getName() != null) {
			            params.addQueryStringParameter("cat_name", cate.getName());
			        }
			        x.http().get(params, new Callback.CommonCallback<String>() {
			            @Override
			            public void onSuccess(String result) {
			
			                List<Document> docList = new ArrayList<Document>();
			                Log.e(LOG_TAG, "onSuccess:" + result.toString());
			                Gson gson = new Gson();
			                ApiReturn ret = gson.fromJson(result, ApiReturn.class);
			                docList = gson.fromJson(gson.toJson(ret.getData()), new TypeToken<ArrayList<Document>>() {
			                }.getType());
			                for (int i = 0; i < docList.size(); i++) {
			                    System.out.println(docList.get(i).getTitle());
			                }
			                func.handleEvent(docList, 1);//回传数据让他自己处理
			            }
			
			            @Override
			            public void onError(Throwable ex, boolean isOnCallback) {
			                Log.e(LOG_TAG, "onError:" + ex.getMessage());
			            }
			
			            @Override
			            public void onCancelled(CancelledException cex) {
			                Log.e(LOG_TAG, "onCancelled");
			            }
			
			            @Override
			            public void onFinished() {
			                Log.e(LOG_TAG, "onFinished");
			            }
			        });
			    }


	-	使用方

	
			  /**
			     * 获取数据
			     *
			     * @param p
			     * @param count
			     */
			    public void getData(int p, int count) {
			
			        Category cat = new Category();
			        cat.setId(0);
			        DocumentApi.getDocumentByCategory(cat, 1, 20, new CallBackFunction() {
			            @Override
			            public void handleEvent(Object data, int what) {
			                if (what == 1) {
			                    List<Document> docList = (ArrayList<Document>) data;//
			                    mBlogListAdapter.refreshData(docList);
			                } else {
			                    Toast.makeText(getContext(), "对不起,没有更多数据了!", Toast.LENGTH_SHORT).show();
			                }
			            }
			        });
			        this.mSwipeRefreshLayout.setRefreshing(false);
			    }


###java还是android很多都使用的是各种listener监听器，其实他的原理就是回调


###只是自己对于这些方面的理解，由于还是初步的认知，先暂时这样。