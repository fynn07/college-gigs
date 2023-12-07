

import { axiosFetch } from "./axios"

export function checkMissingInputs(inputs) {
  for (const key in inputs) {
    if (!inputs[key]) {
      throw new Error("Please fill out all fields!");
    }
  }
}


export async function useGetAllWorks(filter) {

  let data = await axiosFetch("/freelancer/works");

  console.log(data);

  data = data.data.filter((work) => {
    return work.f_type === filter;
  })

  return data;

}