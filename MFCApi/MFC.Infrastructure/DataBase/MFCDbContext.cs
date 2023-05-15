using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MFC.Infrastructure.DataBase
{
    public class MFCDbContext : DbContext
    {
        public MFCDbContext(DbContextOptions<MFCDbContext> options) : base(options)
        {

        }
        public MFCDbContext()
     : base()
        {

        }

    }
}
