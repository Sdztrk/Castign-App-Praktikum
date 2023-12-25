import React, { useEffect }  from 'react'
import Layout from '@/component/layout/layout'
import API from '@/helpers/api_builder'

export default function auth() {
  useEffect(() => {
      // Send GET request
      API.get('get_users').then(response => {
          console.log(response);
      });

      // Send POST request
      // API.post('', { data: 'sampleData' }).then(response => {
      //     console.log(response);
      // });
  }, []);
  return (
    <Layout>
      auth page
    </Layout>
  )
}
