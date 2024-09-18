"use server"

import pb from "@/lib/pocketbase";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  const { token, record: model } = await pb
    .collection('users')
    .authWithPassword(email, password);

  const cookie = JSON.stringify({ token, model });

  cookies().set('pb_auth', cookie, {
    secure: true,
    path: '/',
    sameSite: 'strict',
    httpOnly: true,
  });

  redirect('/');
}

export async function logout() {
  cookies().delete('pb_auth');
  redirect('/');
}

// export async function incomeExpense(formData) {
//   const date = formData.get("date");
//   const amount = formData.get("amount");
//   const account = formData.get("account");
//   const category = formData.get("category");
//   const memo = formData.get("memo");

//   await pb
//     .collection('users')
//     .create(date, amount, account, category, memo);
  
    
// }