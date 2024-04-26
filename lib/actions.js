'use server'

import {cookies} from 'next/headers';
import { redirect } from 'next/navigation';
import {GET} from '@/app/api/account/route.js';

export async function loginActionForm(prevState, formData) {
  const getData = await GET();
  const accountData = await getData.json();
  const enteredUsername = formData.get('username');
  const enteredPassword = formData.get('password');
  const account = accountData.find(account => enteredUsername === account.username && enteredPassword === account.password);
  if (!account) return;
  cookies().set('session', 'test');
  return account;
}

export async function logoutActionForm() {
    cookies().delete('session')
    redirect('/login')
}