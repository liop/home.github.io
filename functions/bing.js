/*
 * @Date: 2024-09-04 12:32:30
 * @Description: 功能：
 */
export async function onRequest(context) {
		const res = await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8', {
		})
		const body = await res.json()
		const bing_data = body.images
		const img_urls = bing_data.map(item => `https://www.bing.com${item.url}`)

		return new Response(JSON.stringify({data: img_urls}),{
			headers: {
				'content-type': 'application/json;charset=UTF-8',
			}
		});
};
