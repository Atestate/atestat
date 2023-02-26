#include <iostream>

using namespace std;

int a[101],n,i;

void aranjare(int a[],int n)
{
    int p=1;
    for(int i=1;i<=n;i++)
    {
        if(a[i]%2==0)
        {
            a[i]=a[i]+a[p];
            a[p]=a[i]-a[p];
            a[i]=a[i]-a[p];
            p=p+1;
        }
    }
}

int main()
{

     cin>>n;
     for(i=1;i<=n;i++)
        cin>>a[i];
     aranjare(a,n);

     for(i=1;i<=n;i++)
        cout<<a[i]<<" ";
    return 0;
}