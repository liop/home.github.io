/*
 * @Date: 2024-09-04 12:32:30
 * @Description: 功能：
 */
export async function GET(request) {
  const url = new URL(request.url)
  const callback = url.searchParams.get('cb');
		const res = await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8', {
		})
		const body = await res.json()
		const bing_data = body.images
		const img_urls = bing_data.map(item => `https://www.bing.com${item.url}`)

		return new Response(`${callback}(${JSON.stringify(img_urls)})`,{
      headers: {
        'Cache-Control':'public, s-maxage=1',
        'content-type': 'application/javascript;charset=UTF-8',
      }
    })
};
